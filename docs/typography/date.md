# Date and time formatting

`DateTime` component renders locale-aware customizable date and time strings. Component expexts `value` prop as string representing time stamp in a [simplified format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) based on [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

```typescript
const ISOString = new Date('03 October 2012 12:36 UTC').toISOString(); // => "2012-10-03T12:36:00.000Z"
```

:::info[Info]
See [DateTime story](https://morewings.github.io/koval-ui/?path=/docs/typography-datetime--docs).
:::

## Import name

```typescript
import {DateTime} from 'koval-ui';
```

## Demo

```jsx live
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
