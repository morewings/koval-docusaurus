# Form field

The `FormField` component is designed to enhance the accessibility and usability of form inputs. It wraps a provided input element or an `InputGroup` and ensures that an accessible `label` is rendered above the input and a `hint` is displayed below it.

```jsx live
//import {FormField, InputColor} from 'koval-ui';

function Example(props) {
  return (
    <FormField
      required={true}
      label="Field label"
      hint="This is input hint">
      <InputColor defaultValue="#CECECE" />
    </FormField>
  );
}
```
