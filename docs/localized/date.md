---
sidebar_position: 2
---

# Date and time formatting

`DateTime` component renders locale-aware customizable date and time strings. Component expexts `value` prop as string representing time stamp in a [simplified format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) based on [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

```typescript
const ISOString = new Date('03 October 2012 12:36 UTC').toISOString(); // => "2012-10-03T12:36:00.000Z"
```

:::info[Info]
See [DateTime story](https://morewings.github.io/koval-ui/?path=/docs/typography-datetime--docs).
:::

## Formatting props

Each formatting prop is an enumerable list of values responsible for display of a certain time period. There are two types available: `TimeNumericUnit` and `TimeNamedUnit`. Each prop is optional, so a relevant segment will be added only if the prop was provided.

```typescript
export type DateFormatOptions = {
  weekday?: keyof typeof TimeNamedUnit;
  era?: keyof typeof TimeNamedUnit;
  year?: keyof typeof TimeNumericUnit;
  month?: keyof typeof TimeNumericUnit | keyof typeof TimeNamedUnit;
  day?: keyof typeof TimeNumericUnit;
  hour?: keyof typeof TimeNumericUnit;
  minute?: keyof typeof TimeNumericUnit;
  second?: keyof typeof TimeNumericUnit;
  timeZoneName?: keyof typeof TimeZoneName;
  hour12?: boolean;
  timeZone?: string;
};
```

### `TimeNumericUnit`

Represents numeric units for time components like year, month, day, hour, minute, and second.

```typescript
export enum TimeNumericUnit {
  numeric = 'numeric',
  '2-digit' = '2-digit',
}
```

#### Explanation

- `numeric`: Full numeric representation (e.g., 2023)
- `'2-digit'`: Two-digit representation (e.g., 23)

### `TimeNamedUnit`

Represents named units for time components like weekday, era, month.

```typescript
export enum TimeNamedUnit {
  long = 'long',
  short = 'short',
  narrow = 'narrow',
}
```

#### Explanation

- `long`: Full name (e.g., Thursday)
- `short`: Abbreviated name (e.g., Thu)
- `narrow`: Shortest form (e.g., T)

### `TimeZoneName`

Represents different formats for displaying time zone names.

```typescript
export enum TimeZoneName {
  short = 'short',
  long = 'long',
  shortOffset = 'shortOffset',
  longOffset = 'longOffset',
  shortGeneric = 'shortGeneric',
  longGeneric = 'longGeneric',
}
```

#### Explanation

- `short`: Short localized form (e.g., PST)
- `long`: Long localized form (e.g., Pacific Standard Time)
- `shortOffset`: Short GMT format (e.g., GMT-8)
- `longOffset`: Long GMT format (e.g., GMT-08:00)
- `shortGeneric`: Short generic form (e.g., PT, Los Angeles Zeit)
- `longGeneric`: Long generic form (e.g., Pacific Time, Nordamerikanische Westküstenzeit)

## Demo

```jsx live
// import {DateTime} from 'koval-ui';
function Example(props) {
  return (
    <DateTime
      value="2012-10-03T12:36:00.000Z"
      era="long"
      year="numeric"
      month="long"
      weekday="long"
      day="numeric"
      hour="numeric"
      minute="numeric"
      second="numeric"
      hour12="false"
      timeZoneName="long"
      enableNoWrap="true"
      locale="en-US"
    />
  );
}
```
