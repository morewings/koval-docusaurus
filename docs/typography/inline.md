---
sidebar_position: 2
---

# Inline elements

Koval UI provides consistent styling for various HTML inline elements, such as `a`, `small`, `sup` and so on.

## Import names

```typescript
import {A, Strong, Sup, Sub, Small, B, Mark, Ins, I, Em, Del, Kbd, Code, S} from 'koval-ui';
```
:::info[Info]
See [Inline elements story](https://morewings.github.io/koval-ui/?path=/docs/typography-inline-elements--docs).
:::

## Demo

```jsx live
function Example(props) {
  return (
    <>
      This text is <A href="#">url</A>
      <br />
      This text is <B>bold</B>
      <br />
      This text is <Strong>strong</Strong>
      <br />
      This text is <I>italic</I>
      <br />
      This text is <Em>emphasized</Em>
      <br />
      This text is <Mark>marked</Mark>
      <br />
      This text is <Small>small</Small>
      <br />
      This is <S>strikethrough text</S>
      <br />
      This text is <Del>deleted</Del>
      <br />
      This text is <Ins>inserted</Ins>
      <br />
      This is <Sub>subscript</Sub> and <Sup>superscript</Sup>
      <br />
      This is <Kbd>Shift</Kbd> and <Kbd>Ctrl</Kbd>
      <br />
      This is <Code>code</Code>
      <br />
      This was the day: <DateTime value="2019-03-15T16:30:00.000Z" />
      <br />
    </>
  );
}
```
