---
sidebar_position: 3
---

# Number formatting

Number formatters provide an internationalized number formatting solution based on `Intl.NumberFormat`. It allows developers to create flexible and locale-aware number displays with various customization options.

## Description

Koval ensures consistent number formatting that respects the selected locale. It offers four distinct components for number formatting:

- `NumberDecimal`: Formats and displays the provided `value` according to the **locale**.
- `NumberPercent`: Formats and displays provided `value` as a **percentage**.
- `NumberCurrency`: Formats and displays provided `value` as a **currency string**, appending the specified currency type.
- `NumberUnit`: Formats and displays provided `value`, appending the localized unit name.

Each component applies consistent grouping separators based on the selected language standard. This feature is optional and can be disabled using the `grouping` prop.

## Formatting properties

### `digitsConfig`

- Type: `DigitsConfig`
- Description: Configuration for the number of digits to display
- Example:
  ```javascript
  const config = {
    integer: {minimum: 3},
    fraction: {minimum: 2, maximum: 4},
  };
  // When value is 1.23456
  // With above config it will display as "001.23" (minimum 3 integer digits, 2-4 fraction digits)
  ```

### `notation`

- Type: `standard` | `scientific` | `engineering` | `compact`
- Default: `"standard"`
- Description: The formatting notation to use
- See [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#notation)

### `compactDisplay`

Only applies when the notation is `compact`

- Type: `short` | `long`
- Description: How to display compact numbers
- See [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#compactdisplay)

### `grouping`

- Type: `boolean`
- Default: `true`
- Description: Whether to use grouping separators (e.g., thousands separators)

### `signDisplay`

- Type: `auto` | `always` | `exceptZero` | `never`
- Default: `auto`
- Description: How to display the sign (+/-) based on different rules
- See [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#signdisplay)

## `NumberDecimal`

The NumberDecimal component is used to format any numeric value. It supports various notations, including `scientific` and `engineering`.

:::info[Info]
See [NumberDecimal story](https://morewings.github.io/koval-ui/?path=/docs/typography-number-decimal--docs).
:::

```jsx live
// import {NumberDecimal} from 'koval-ui';

function Example(props) {
  return <NumberDecimal locale="en-US" value={1234567890} notation="scientific" />;
}
```

## `NumberPercent`

The `NumberPercent` component formats the value as a percentage by multiplying it by 100.

:::info[Info]
See [NumberPercent story](https://morewings.github.io/koval-ui/?path=/docs/typography-number-percent--docs).
:::

```jsx live
// import {NumberPercent} from 'koval-ui';

function Example(props) {
  return <NumberPercent locale="en-US" value={0.123} />;
}
```

## `NumberCurrency`

The `NumberCurrency` component displays the value in a conventional **currency string format**, appending the **ISO 4217** currency code, localized name, or symbol. This is particularly useful for displaying financial information.

### Currency Specific Props

- `currency` (required when currency formatting is desired): The ISO 4217 currency code (e.g., "USD", "EUR")
- `currencyDisplay`: How to display the currency symbol or code
- `currencySign`: Controls how the currency sign is displayed

:::info[Info]
See [NumberCurrency story](https://morewings.github.io/koval-ui/?path=/docs/typography-number-currency--docs).
:::

```jsx live
// import {NumberCurrency} from 'koval-ui';
function Example(props) {
  return <NumberCurrency locale="en-US" value={-123456.789} currency="EUR" />;
}
```

## `NumberUnit`

The `NumberUnit` component is used for displaying numeric information about entities. It appends one of the [ECMA standard-supported units](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers). The component supports different notations, such as `scientific` and `engineering`, and the unit display can be set to `short`, `long`, or `narrow` localized variants.

### Unit Specific Props

- `unit`: Specifies a unit to display with the number (e.g., `kg`, `m`)
- `unitDisplay`: Controls how the unit is displayed (short, narrow, long)

:::info[Info]
See [NumberUnit story](https://morewings.github.io/koval-ui/?path=/docs/typography-number-unit--docs).
:::

```jsx live
//import {NumberUnit} from 'koval-ui';

function Example(props) {
  return (
    <NumberUnit locale="en-US" value={123456.789} unit="petabyte" unitDisplay="long" />
  );
}
```

## Advanced Examples

### Number in scientific notation with 3 significant digits:

```jsx live
function Example(props) {
  return (
    <NumberDecimal
      notation="scientific"
      locale="en-US"
      value={123456}
      digitsConfig={{significant: {minimum: 3, maximum: 3}}}
    />
  );
}
```

### Percentage with exactly 2 decimal places:

```jsx live
function Example(props) {
  return (
    <NumberPercent
      notation="scientific"
      locale="en-US"
      value={0.123456}
      digitsConfig={{fraction: {maximum: 2}}}
    />
  );
}
```
