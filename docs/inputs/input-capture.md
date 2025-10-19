---
sidebar_position: 5
---

# ⚙️ Input capture API

## Input modes

| Feature                | Controlled                                                                                     | Uncontrolled                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Value source**       | React state (passed via `value` or `checked`)                                                  | The browser’s internal DOM state (set once with `defaultValue` / `defaultChecked`)                          |
| **Updating the value** | You must update the prop (usually inside an `onChange` handler) for the UI to reflect changes. | The input updates itself; you only read the value when needed (e.g., on submit).                            |
| **Typical use‑case**   | Forms that need instant validation, conditional rendering, or integration with Redux/Context.  | Simple forms where you don’t need to track the value in React, or when you only care about the final value. |

### Controlled input

**Controlled** inputs give you full control over the field’s value. The component is read‑only unless value changes, so you must update the prop in response to user input. Use when you need to validate, format, or otherwise react to the value in real time.

```jsx live
//import {InputText} from 'koval-ui';

function Example(props) {
  const [value, setValue] = useState('Value');

  const handleChange = useCallback(event => {
    console.log('value', event.target.value);
    setValue(event.target.value);
  }, []);

  return <InputText name="foo" value={value} onChange={handleChange} />;
}
```

### Uncontrolled input

**Uncontrolled** inputs let the DOM manage the state. Developers set an initial value with `defaultValue` (or `defaultChecked`) and then read the final value, usually on the form submitted. Ideal for quick forms or when you don’t need to sync the value with React state.

```jsx live
//import {InputText} from 'koval-ui';

function Example(props) {
  const [value, setValue] = useState('');
  const handleSubmit = useCallback((_, formState) => {
    // Koval Form component invokes callbacks with full form state as a second parameter
    console.log('value', formState.foo);
    setValue(formState.foo);
  }, []);
  return (
    <Form onSubmit={handleSubmit}>
      Submitted value: '{value}'
      <div>
        <InputText name="foo" defaultValue="Default value" />
      </div>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}
```

## Textual capture API

This type defines the props for handling callbacks with textual input elements
(like `InputText` and `Textarea`).

| Prop Name      | Type      | Description                                                              |
| -------------- | --------- | ------------------------------------------------------------------------ |
| `value`        | `string`  | Controls input value in controlled mode; component manages state         |
| `defaultValue` | `string`  | Sets initial value in non-controlled mode; uses browser default behavior |
| `disabled`     | `boolean` | Prevents user interaction                                                |
| `readOnly`     | `boolean` | Makes input non-editable but still selectable                            |

Use `value` for controlled components where you need to directly manage the input's state in your application logic. Use `defaultValue` for non-controlled components when you want the browser to handle the input's state internally.

## Interactive capture API

:::warning[Warning]
`value` prop serves a special purpose for [inputs of interactive
type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#additional_attributes):
when a form is submitted, only inputs which are currently checked are submitted to the server,
and this is reported value.
:::

This type defines the props for handling callbacks with interactive input elements.

| Prop Name        | Type      | Description                                                  |
| ---------------- | --------- | ------------------------------------------------------------ |
| `value`          | `string`  | Provides an initial value (does not control checked status)  |
| `defaultChecked` | `boolean` | Sets the initial checked state for a non-controlled checkbox |
| `checked`        | `boolean` | Controls the checked state of a controlled checkbox          |

Use `checked` to manage the checkbox’s state in your application logic (controlled components). Use `defaultChecked` for non-controlled checkboxes where you want the browser to handle the state internally.
