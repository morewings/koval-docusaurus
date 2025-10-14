---
sidebar_position: 2
---


# Form field

The `FormField` component is designed to enhance the accessibility and usability of form inputs. It wraps a provided input element or an `InputGroup` and ensures that an accessible `label` is rendered above the input and a `hint` is displayed below it.

## Props

| Prop Name  | Type      | Description                                                             |
|------------|-----------|-------------------------------------------------------------------------|
| `label`    | `string`  | Text label for the input field                                          |
| `hint`     | `string`  | Optional hint text displayed below the input                            |
| `required` | `boolean` | Indicates whether the input is required (displays asterisk after label) |

## Demo

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
