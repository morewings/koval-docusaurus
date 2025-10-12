# Number formatting

## Description

Koval ensures consistent number formatting that respects the selected locale. It offers four distinct components for number formatting:

- `NumberDecimal`: Formats and displays the provided `value` according to the **locale**.
- `NumberPercent`: Formats and displays provided `value` as a **percentage**.
- `NumberCurrency`: Formats and displays provided `value` as a **currency string**, appending the specified currency type.
- `NumberUnit`: Formats and displays provided `value`, appending the localized unit name.

Each component applies consistent grouping separators based on the selected language standard. This feature is optional and can be disabled using the `grouping` prop.

## Import names

```tsx
import {NumberDecimal, NumberPercent, NumberCurrency, NumberUnit} from 'koval-ui';
```

## `NumberDecimal`

The NumberDecimal component is used to format any numeric value. It supports various notations, including `scientific` and `engineering`.

:::info[Info]
See [NumberDecimal story](https://morewings.github.io/koval-ui/?path=/docs/typography-number-decimal--docs).
:::

```jsx live
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
function Example(props) {
  return <NumberPercent locale="en-US" value={0.123} />;
}
```

## `NumberCurrency`

The `NumberCurrency` component displays the value in a conventional **currency string format**, appending the **ISO 4217** currency code, localized name, or symbol. This is particularly useful for displaying financial information.

:::info[Info]
See [NumberCurrency story](https://morewings.github.io/koval-ui/?path=/docs/typography-number-currency--docs).
:::

```jsx live
function Example(props) {
  return <NumberCurrency locale="en-US" value={-123456.789} currency="EUR" />;
}
```

## `NumberUnit`

The `NumberUnit` component is used for displaying numeric information about entities. It appends one of the [ECMA standard-supported units](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers). The component supports different notations, such as `scientific` and `engineering`, and the unit display can be set to `short`, `long`, or `narrow` localized variants.

:::info[Info]
See [NumberUnit story](https://morewings.github.io/koval-ui/?path=/docs/typography-number-unit--docs).
:::

```jsx live
function Example(props) {
  return <NumberUnit locale="en-US" value={123456.789} unit="petabyte" />;
}
```
