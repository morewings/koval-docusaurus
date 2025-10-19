---
sidebar_position: 6
---

# ⚙️ Input validation

Input validation in Koval is made through **built-in validation properties** (`required`, `pattern`, `maxLength`, `minLength`, `max`, `min`) or a **validation state** (external validation result or callback function prop), which supports custom and asynchronous validation.

Koval leverages the native `HTMLInputElement` error API and browser-integrated error tooltips.

## Basic validation

### Textual

Textual inputs have `required`, `maxLength`, `minLength` `pattern` validation props same as `HTMLInputElement`.

```jsx live
//import {InputText} from 'koval-ui';

function Example(props) {
  return (
    <InputText
      maxLength={6}
      placeholder="Type to test"
      // email address format expected
      pattern="[^@\\s]+@[^@\\s]+"
      // show error when input is empty
      required
    />
  );
}
```

### Interactive

Interactive inputs support only `required` built in validation.

```jsx live
//import {InputText} from 'koval-ui';

function Example(props) {
  return (
    <div style={{width: 188}}>
      <InputCheckbox label="Click to test" required />
    </div>
  );
}
```

## Custom validation

Developers can provide a `validation` prop to each input for custom validation. This prop functions as an external state or as a callback, executing each time the input value changes.

### External (aka controlled) validation

:::danger[Warning]
Don&apos;t use internal input validation (`pattern` etc) when `validation` is set to controlled mode.
:::

`validation` props can accept four external validation states: `pristine`, `valid`, `error` and `inProgress`.

| Validation state |                            Explanation                            |
| :--------------- | :---------------------------------------------------------------: |
| pristine         |         When user didn't interact with input. Empty icon.         |
| valid            |              Indicates successfull validation result              |
| error            |                Indicates failed validation result                 |
| inProgress       | Validation is ongoing. Useful for async validation on server side |

```jsx live
//import {InputText} from 'koval-ui';

function Example(props) {
  return (
    <div style={{width: 188}}>
      <InputText validation="error" />
    </div>
  );
}
```

### Custom validator function

:::info[No conflicts]
Internal input validation (`pattern`, etc.) works normally together with validator function.
:::

```ts
type validatorFn = (
  value: unknown,
  validityState: ValidityState,
  formState: Record<string, FormDataEntryValue>
) => string | Promise<string>;
```

The [ValidityState interface](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) represents the browser built-in validity states for an input.

`formState` is a special object containing full form state, applicable if the input is part of a form. [FormDataEntryValue](https://udn.realityripple.com/docs/Web/API/FormDataEntryValue) represents a single value from a set of [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key-value pairs.

Validator can work in either **sync** (returns `string`) or (returns `Promise<string>`) **async** mode. An empty string `''` indicates a **successful** validation result, while a non-empty string produces an input **error** with the provided text.

### Sync validator

Ideal for complex client-side data validations.

```jsx live
//import {InputText} from 'koval-ui';
function Example(props) {
  const validatorFn = useCallback(value => {
    console.log('Value captured:', value);
    if (value && value.length > 3) {
      return 'Too long';
    } else {
      return '';
    }
  }, []);
  return (
    <div style={{width: 188}}>
      <InputText placeholder="Type to test" validation={validatorFn} />
    </div>
  );
}
```

### Async validator

Useful for server-side data validation. Runs with a 1000 ms debounced delay.

```jsx live
//import {InputText} from 'koval-ui';
function Example(props) {
  const validatorFn = useCallback(async value => {
    console.log('Value captured:', value);
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (value && value.length > 3) {
      return `Last captured: ${value}`;
    } else {
      return '';
    }
  }, []);
  return (
    <div style={{width: 188}}>
      <InputText placeholder="Type to test" validation={validatorFn} />
    </div>
  );
}
```

## Override built-in error messages

Custom error messages can be displayed for built-in validations.

```tsx
const validatorFn = (value: unknown, validityState: ValidityState) => {
  if (validityState.valueMissing) {
    return 'Please provide value for the input';
  } else if (validityState.patternMismatch) {
    return 'Please provide valid email';
  }
  return '';
};
```

## Implement complex validation

It is possible to make an input validation result to be dependent on other field value belonging to the same form. Enable `revalidateOnFormChange` prop and use `formState` parameter inside `validatorFn`.

```jsx live
//import {Form, InputText, InputGroup, InputRadio, Button} from 'koval-ui';
function Example(props) {
  const validatorFn = useCallback((value, validityState, formState) => {
    switch (formState['case-selector']) {
      case 'lowercase': {
        const isLowerCase = value.toLowerCase() === value;
        return isLowerCase ? '' : 'Only lower case allowed.';
      }
      case 'uppercase': {
        const isUpperCase = value.toUpperCase() === value;
        return isUpperCase ? '' : 'Only upper case allowed.';
      }
      default:
        return '';
    }
  }, []);
  return (
    <Form>
      <InputGroup name="case-selector">
        <InputRadio defaultChecked={true} label="Allow uppercase" value="uppercase" />
        <InputRadio label="Allow lowercase" value="lowercase" />
      </InputGroup>
      <InputText
        revalidateOnFormChange
        validation={validatorFn}
        name="text"
        placeholder="Validated dynamically"
      />
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}
```
