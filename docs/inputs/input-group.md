---
sidebar_position: 4
---


# Input groups

The `InputGroup` component is a powerful tool for managing groups of [InputCheckbox](https://morewings.github.io/koval-ui/?path=/docs/inputs-checkbox--docs) or [InputRadio](https://morewings.github.io/koval-ui/?path=/docs/inputs-radio--docs) components, ensuring that labels and hints are properly rendered and that group `name`, `required` and `disabled` states are consistently applied. This enhances the overall user experience and accessibility of your forms.

## Group API

Mandatory `name` prop is applied to all child inputs. There are also optional `required` adn `disabled` props, which are applied in the same manner.

| Prop Name  | Type                           | Description                                                            |
|------------|--------------------------------|------------------------------------------------------------------------|
| `onChange` | `(event: ChangeEvent) => void` | Callback function triggered when any input in the group changes        |
| `label`    | `string`                       | Text label displayed for the entire form group                         |
| `name`     | `string`                       | Name attribute applied to all inputs in the group (required for forms) |
| `disabled` | `boolean`                      | Disables all inputs in the group                                       |
| `required` | `boolean`                      | Makes all inputs in the group required                                 |
| `hint`     | `string`                       | Hint text displayed below the form group                               |

:::info[Info]
The `children` prop accepts components with `ChildProps` interface and additional unknown properties.
:::

## Group of checkboxes

Allows multiple choices.

```jsx live
//import {InputGroup} from 'koval-ui';

function Example(props) {
  const handleChange = useCallback(event => {
    console.log('value', event.target.value);
  }, []);

  return (
    <div style={{width:222}}>
      <InputGroup onChange={handleChange} name="demo-group" label="Group label" hint="This is hint">
        <InputCheckbox value="foo" label="This is a foo label" required />
        <InputCheckbox value="bar" label="This is a bar label" />
        <InputCheckbox value="bazz" label="This is a bazz label" />
      </InputGroup>
    </div>

  );
}
```

## Group of radio buttons

Radio button input allows single item selection. Works only in a group by design.

```jsx live
//import {InputGroup} from 'koval-ui';

function Example(props) {
  const handleChange = useCallback(event => {
    console.log('value', event.target.value);
  }, []);

  return (
    <div style={{width:222}}>
      <InputGroup onChange={handleChange} name="demo-group" label="Group label" hint="This is hint">
        <InputRadio value="foo" label="This is a foo label" />
        <InputRadio value="bar" label="This is a bar label" />
        <InputRadio value="bazz" label="This is a bazz label" />
      </InputGroup>
    </div>

  );
}
```
