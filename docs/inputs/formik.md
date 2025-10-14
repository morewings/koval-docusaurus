---
sidebar_position: 8
---

# Formik integration

This guide explains how to manage form state and perform validation in Koval UI forms using [Formik](https://formik.org/), a popular and powerful form library for React. We'll walk through a complete example that uses Formik for state management and [Yup](https://github.com/jquense/yup) for validation.

## Define a validation schema with yup

First, we define our form's [validation rules](https://github.com/jquense/yup?tab=readme-ov-file#schema-basics) using Yup. This schema specifies that the email field must be a valid email format and is required. The password field is also required and must have a minimum length of 8 characters.

```js
const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
```

This schema object is later passed to Formik, which will use it to automatically validate the form's values.

## Initialize Formik

The useFormik hook is the heart of our form logic. We configure it with an object containing our form's initial state and behavior.

- `initialValues`: This object sets the default values for your form fields.
- `validationSchema`: Here, we pass the Yup schema we created earlier.
- `onSubmit`: This function is called only when the form is submitted and all validation rules pass. It receives the final form values.
- `validateOnChange`: This tells Formik to run validation checks every time a field's value changes, providing instant feedback to the user.

```js
const formik = useFormik({
  initialValues: {
    email: 'foobar@example.com',
    password: 'foobar',
  },
  validationSchema: validationSchema,
  onSubmit: values => {
    console.log(values);
  },
  validateOnChange: true,
});
```

## Bridge Formik state to Koval UI Validation API

A key part of the integration is translating Formik's state into props that Koval UI components can understand. The `InputText` and `InputPassword` components have a `validation` prop that accepts `pristine`, `valid`, or `error` values.

We create a helper function, `getValidation`, to handle this mapping. It checks if a field is both **touched** (the user has interacted with it) and **invalid** (fails validation) to return `error`. If it hasn't been `touched`, it remains `pristine`. Otherwise, it's considered `valid`.

```js
const getValidation = ({invalid, isTouched}) => {
  if (invalid && isTouched) {
    return 'error';
  } else if (!isTouched) {
    return 'pristine';
  }
  return 'valid';
};
```

Inside the component, we call this function for each field to get its current validation state. We also prepare the `hint` text for the `FormField` component, ensuring an error message only appears if the field has been touched.

```js
const emailValidationState = getValidation({
  invalid: Boolean(formik.errors.email),
  isTouched: formik.touched.email,
});
const emailHint = formik.touched.email ? formik.errors.email : undefined;
```

## Glue React components

Finally, we render our form using Koval UI components and connect all the Formik properties.

### Connect `Form` and `FormField`

`<KovalForm onSubmit={formik.handleSubmit}>`: form's onSubmit event is handled by `formik.handleSubmit`. `<FormField label="..." hint={...}>`: `FormField` component wraps our input to provide a label and a place to display validation hints (our error messages).

### Connect `Input`

This is where the core connection happens.

- `name`: Must match the key in initialValues.
- `value={formik.values.email}`: Bind the input's value to the Formik state.
- `onChange={formik.handleChange}`: Update the Formik state when the user types.
- `onBlur={formik.handleBlur}`: Mark the field as `touched` when the user clicks away.
- `validation={emailValidationState}`: Pass the calculated validation state to style the input correctly (e.g., with a red border on error).
- `errorMessage={formik.errors.email}`: Provide the specific error message for accessibility.

```jsx
<InputText
  name="email"
  value={formik.values.email}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  validation={emailValidationState}
  errorMessage={formik.errors.email}
/>
```

## Full demo

<iframe
src="https://stackblitz.com/edit/vitejs-vite-qwyrdccs?embed=1&file=src%2FApp.tsx&theme=light"
width="100%"
height={666}
/>
