---
sidebar_position: 2
---

# Form field

The `FormField` component is designed to enhance the accessibility and usability of form inputs. It wraps a provided input element or an `InputGroup` and ensures that an accessible `label` is rendered above the input and a `hint` is displayed below it.

## Props

### label

type: `string` required

Text label associated with the wrapped input.

### hint

type: `string`

Hint text to be displayed below the input.

### required

type: `boolean`

Renders \* character after label indicating required input status. Also, asterisk is set automatically when required input is provided.

## Demo

```jsx live
//import {FormField, InputColor} from 'koval-ui';

function Example(props) {
  return (
    <FormField required={true} label="Field label" hint="This is input hint">
      <InputColor defaultValue="#CECECE" />
    </FormField>
  );
}
```
