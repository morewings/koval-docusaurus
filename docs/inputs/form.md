---
sidebar_position: 1
---

# Form component

The `Form` component wraps a set of input components that manage their combined values in a single state and allow to submit this data. It offers compatibility with native `HTMLFormElement`, enabling seamless integration into existing workflows.

## Callback API

Standard event callbacks are supported, including:

- `onSubmit`: when the form is successfully submitted;
- `onInvalid`: when there are validation errors in the form;
- `onReset`: when the form is reset to its initial state;
- `onChange`: whenever an input value changes;

Each callback receives an event as a first parameter and a form state object as a second.

```ts
type onChange = (
  event: ChangeEvent<HTMLFormElement>,
  formState: Record<string, FormDataEntryValue>
) => void;
```

`FormDataEntryValue` is a built-in type. It represents the possible values that can be associated with an input field in a form.

```ts
type FormDataEntryValue = string | File | Blob | ArrayBuffer | URL | boolean;
```

## Demo

```jsx live
//import {Form, FormField, InputText, Button} from 'koval-ui';

function Example(props) {
  const handleSubmit = useCallback((event, formState) => {
    console.log('Submit event', event);
    console.log('formState', formState);
  }, [])
  const handleInvalid = useCallback((event, formState) => {
    console.log('Invalid event', event);
    console.log('formState', formState);
  }, [])
  const handleReset = useCallback((event, formState) => {
    console.log('Reset event', event);
    console.log('formState', formState);
  }, [])
  const handleChange = useCallback((event, formState) => {
    console.log('Change event', event);
    console.log('formState', formState);
  }, [])

  return (
    <Form
      onSubmit={handleSubmit}
      onInvalid={handleInvalid}
      onReset={handleReset}
      onChange={handleChange}>
      <FormField
        label="Field label">
        <InputText name="text" placeholder="Example input" />
      </FormField>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}
```
