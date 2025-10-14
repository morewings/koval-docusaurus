---
sidebar_position: 3
---

# Inputs overview

**Input** is a component capable of capturing user's input provided by various input hardware: keyboard, mouse, touchscreen, camera, microphone, etc.

## Input API

All input components expose the same _native_ props that mirror the attributes
available on a standard `HTMLInputElement` element. They are grouped into three tiers:

- **Base** – common to every input type
- **Textual** – for fields that accept free‑form text
- **Numeric** – a special case of textual input that only accepts numbers

### Base (native) props

| Prop      | Type    | Description                                            |
| --------- | ------- | ------------------------------------------------------ |
| name      | string  | Name of the input, submitted with form data.           |
| required  | boolean | Set native HTML `required` attribute.                  |
| disabled  | boolean | Disable input.                                         |
| autoFocus | boolean | Provide substitute for native autofocus functionality. |
| form      | string  | Set native HTML `form` attribute.                      |

## Input types

Koval has three major types of inputs: **interactive**, **textual** and **numeric**.

| Category        | What it captures                                        | Typical component                       |
| --------------- | ------------------------------------------------------- | --------------------------------------- |
| **Interactive** | Click / tap / touch – e.g. checkboxes, radios, switches | `InputCheckbox`, `InputRadio`, `Select` |
| **Textual**     | Text entry via keyboard (or other text‑input hardware)  | `InputText`, `Textarea`                 |
| **Numeric**     | Textual input that only accepts numbers                 | `InputNumber`, `InputRange`             |

## Interactive input

Interactive inputs capture user input provided by mouse, touchscreen, etc.

```jsx live
//import {InputCheckbox} from 'koval-ui';

function Example(props) {
  return <InputCheckbox defaultChecked={false} label="Checkbox" indeterminate={true} />;
}
```

### Interactive input props

Outside native props interactive inputs accept input-specific props based on their logic. E.g. `InputCheckbox` accepts `label` and `indeterminate` props.

## Textual input

Textual inputs capture the user text input provided by the keyboard.

```jsx live
//import {InputText} from 'koval-ui';

function Example(props) {
  return <InputText defaultValue="Text input" />;
}
```

### Textual input props

Textual inputs are provided with additional props related to input mode and visual text formatting.

| Prop         | Type   | Description                                                                             |
| ------------ | ------ | --------------------------------------------------------------------------------------- |
| inputMode    | enum   | allows the browser to display an appropriate virtual keyboard.                          |
| placeholder  | string | Set text for placeholder.                                                               |
| autoComplete | string | Set native HTML `autocomplete` attribute.                                               |
| maxLength    | number | Define the maximum number of characters the user can enter.                             |
| minLength    | number | Define the minimum number of characters the user can enter.                             |
| pattern      | string | Pattern attribute specifies a regular expression the form control's value should match. |
| size         | number | Define the width of the input in characters.                                            |

## Numeric input

```jsx live
//import {InputNumber} from 'koval-ui';

function Example(props) {
  return <InputNumber defaultValue={33} />;
}
```

### Numeric input props

Numeric inputs are a thin wrapper over textual inputs that drop the properties
that don't make sense for numbers (`inputMode`, `pattern`, `maxLength`,
`minLength`).

They add the standard numeric attributes:

| Prop | Type   | Description                                                          |
| ---- | ------ | -------------------------------------------------------------------- |
| min  | number | Minimum numeric value.                                               |
| max  | number | Define the maximum value that is acceptable and valid for the input. |
| step | number | Specify the granularity that the value must adhere to.               |
