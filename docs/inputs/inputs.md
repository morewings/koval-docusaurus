# Inputs

**Input** is a component capable of capturing user's input provided by various input hardware: keyboard, mouse, touchscreen, camera, microphone, etc.

## Input types

Koval has two major types of inputs: **interactive**, **textual** and **numeric**.

| Category        | What it captures                                        | Typical component                       |
|-----------------|---------------------------------------------------------|-----------------------------------------|
| **Interactive** | Click / tap / touch – e.g. checkboxes, radios, switches | `InputCheckbox`, `InputRadio`, `Select` |
| **Textual**     | Text entry via keyboard (or other text‑input hardware)  | `InputText`, `Textarea`                 |
| **Numeric**     | Textual input that only accepts numbers                 | `InputNumber`, `InputRange`             |

### Interactive input

Interactive inputs capture user input provided by mouse, touchscreen, etc.

```jsx live
//import {InputCheckbox} from 'koval-ui';

function Example(props) {
  return <InputCheckbox defaultChecked={true} label="Checkbox" />;
}
```

### Textual input

Textual inputs capture the user text input provided by the keyboard.

```jsx live
//import {InputText} from 'koval-ui';

function Example(props) {
  return <InputText defaultValue="Text input" />;
}
```

### Numeric input

```jsx live
//import {InputNumber} from 'koval-ui';

function Example(props) {
  return <InputNumber defaultValue={33} />;
}
```

## Input API

All input components expose the same _native_ props that mirror the attributes
available on a standard `HTMLInputElement` element.  They are grouped into three tiers:

- **Base** – common to every input type
- **Textual** – for fields that accept free‑form text
- **Numeric** – a special case of textual input that only accepts numbers

### Base (native) props

| Prop      | Type    | Description                                                                                                                                                                                                                      |
|-----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name      | string  | Name of the input, submitted with form data. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name)                                                                                                         |
| required  | boolean | Set native HTML `required` attribute. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required)                                                                                                               |
| disabled  | boolean | Disable input. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled)                                                                                                                                   |
| autoFocus | boolean | Provide substitute for native autofocus functionality. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) [React issue](https://github.com/facebook/react/issues/11851#issuecomment-351672131) |
| form      | string  | Set native HTML `form` attribute.                                                                                                                                                                                                |

### Textual input props

Textual inputs are provided with additional props related to input mode and visual text formatting.

| Prop         | Type          | Description                                                                                                                                                                                                                                                          |
|--------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| inputMode    | string (enum) | Provide a hint about the type of data that might be entered by the user while editing the element or its contents. This allows the browser to display an appropriate virtual keyboard. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inputMode) |
| placeholder  | string        | Set text for placeholder. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder)                                                                                                                                                         |
| autoComplete | string        | Set native HTML `autocomplete` attribute. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)                                                                                                                                           |
| maxLength    | number        | Define the maximum number of characters (as UTF-16 code units) the user can enter. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength)                                                                                                     |
| minLength    | number        | Define the minimum number of characters (as UTF-16 code units) the user can enter. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlength)                                                                                                     |
| pattern      | string        | Pattern attribute specifies a regular expression the form control's value should match. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)                                                                                                  |
| size         | number        | Define the width of the input in characters.                                                                                                                                                                                                                         |

### Numeric input props

Numeric inputs are a thin wrapper over textual inputs that drop the properties
that don't make sense for numbers (`inputMode`, `pattern`, `maxLength`,
`minLength`).

They add the standard numeric attributes:

| Prop | Type   | Description                                                                                                                                  |
| ---- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| min  | number | Minimum numeric value.                                                                                                                       |
| max  | number | Define the maximum value that is acceptable and valid for the input. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max) |
| step | number | Specify the granularity that the value must adhere to. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step)              |
