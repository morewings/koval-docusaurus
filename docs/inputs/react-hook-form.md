---
sidebar_position: 7
---

# 🧩 React Hook Form integration

:::info[Info]
[React Hook Form](https://react-hook-form.com/) is known for its minimal re-renders and straightforward API, which makes it an excellent choice for building highly performant forms.
:::

This example sets up a simple form with one input field that has validation rules for being required and having a minimum length.

## Set up `useForm`

The journey begins with the `useForm` hook, which is the foundation of your form. We destructure several key methods and objects from it: `getFieldState`, `register`, `handleSubmit`, and `formState.errors`.

It is recommended to set the `mode` to `all`. This configuration ensures that validation is triggered on both blur and change events, providing immediate and consistent feedback to the user, which aligns perfectly with Koval UI's interactive components.

```js
const {
  getFieldState,
  register,
  handleSubmit,
  formState: {errors},
} = useForm({
  mode: 'all',
});
```

## Register inputs with validation

The `register` function connects Koval UI input to React Hook Form. By spreading `{...register('exampleHint', {...})}` onto the `InputText` component, you are effectively registering it under the name `exampleHint`. This handles the `onChange`, `onBlur`, and `ref` props automatically.

```jsx
<InputText
  {...register('exampleHint', {
    required: 'This field is required!',
    minLength: {value: 3, message: 'Minimum 3 symbols'},
  })}
/>
```

## Map validation state for Koval UI inputs

Koval UI's input components use a `validation` prop that accepts specific string values: `error`, `pristine`, or `valid`. React Hook Form, on the other hand, provides its state through booleans like `invalid` and `isTouched`. We need to bridge this gap.

Using the `getFieldState('exampleHint')` method, we retrieve the current state of our input. Then, we use a simple conditional block (wrapped in an IIFE for immediate execution) to map these booleans to the required string for Koval UI's validation prop. This logic ensures the input field visually reflects its `validation` status correctly—showing an error only when it's both `invalid` and has been `interacted` with.

```js
const {invalid, isTouched} = getFieldState('exampleHint');

const validation = (() => {
  if (invalid) {
    // trigger an error for the input
    return 'error';
  } else if (!isTouched) {
    // don't show successful validation, when input value is unchanged
    return 'pristine';
  }
  // everything else considered to be successful validation
  return 'valid';
})();
```

## Display error messages

React Hook Form collects all validation errors in the `formState.errors` object. We access the specific error message for our field using `errors.exampleHint?.message`. The optional chaining (?.) is a safe way to prevent errors if the field is valid and its error message doesn't exist.

For demo purposes this message is then passed to two places:

- The `hint` prop of the `FormField` component, which displays the error text below the input.
- The `errorMessage` prop of the `InputText` component, which use native HTMLInputElement API to display an error using browser.

## Handle form submission

Finally, the `handleSubmit` function acts as middleware for your form's `onSubmit` event. You wrap your own submission handler (our `onSubmit` function) inside it, like so: `onSubmit={handleSubmit(onSubmit)}`.

This setup ensures that your `onSubmit` function will only be called if all your validation rules pass successfully. If there are any validation errors, React Hook Form will prevent the submission and automatically focus on the first invalid field.

```tsx
// Handle form successful submit
const onSubmit = data => console.log(data);

return <Form onSubmit={handleSubmit(onSubmit)}>{/*...*/}</Form>;
```

## Full demo

<iframe
src="https://stackblitz.com/edit/vitejs-vite-quvr7vjl?embed=1&file=src%2FApp.tsx&theme=light"
width="100%"
height={666}
/>
