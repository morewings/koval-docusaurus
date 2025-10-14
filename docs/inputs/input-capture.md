# Input capture API

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

## Textual input API

This type defines the props for handling callbacks with textual input elements (like `<input>` and `<textarea>`).

- **`value?: string`**: Controls the input's value in _controlled mode_. When provided, the component manages the input's state. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value)
- **`defaultValue?: string`**: Sets an initial value for the input in _non-controlled mode_. The component does not manage the input's state; it uses the browser's default behavior. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value)
- **`disabled?: boolean`**: Disables the input, preventing user interaction. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled)
- **`readOnly?: boolean`**: Makes the input non-editable by the user, but still allows it to be selected and copied from. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)

Use `value` for controlled components where you need to directly manage the input's state in your application logic. Use `defaultValue` for non-controlled components when you want the browser to handle the input's state internally.

## Interactive input API

:::warning[Warning]
`value` prop serves a special purpose for [inputs of interactive
type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#additional_attributes):
when a form is submitted, only inputs which are currently checked are submitted to the server,
and this is reported value.
:::

This type defines the props for handling callbacks with interactive input elements.

- **`value?: string`**: Provides an initial value for the checkbox. **Important:** This prop _does not_ control the checkbox's state. Use the `checked` prop to manage its checked status. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value)
- **`defaultChecked?: boolean`**: Sets the initial checked state for a _non-controlled_ checkbox. In this mode, the component doesn't manage the checkbox's state; it relies on the browser's default behavior. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#checked)
- **`checked?: boolean`**: Controls the checked state of a _controlled_ checkbox. When provided, the component manages the checkbox's state directly. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#checked)

Use `checked` to manage the checkbox’s state in your application logic (controlled components). Use `defaultChecked` for non-controlled checkboxes where you want the browser to handle the state internally.
