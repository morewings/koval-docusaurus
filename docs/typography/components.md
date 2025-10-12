# Typography components

Koval UI offers a suite of components designed to ensure typography consistency and harmony across various text elements, including paragraphs, headers, lists, numbers, and tables.

:::info[Info]
You can find all Koval typography components at the corresponding [Storybook chapter](https://morewings.github.io/koval-ui/?path=/docs/typography-intro--docs).
:::

## Paragraph

The Paragraph (`P`) component provides a uniform style based on the `HTMLParagraphElement`.

### Import name

```typescript
import {P} from 'koval-ui';
```

### Demo

```jsx live
function Example(props) {
  return (
    <>
      <P>
        Kurazh Bazaar, the epitome of urban cool, is where vintage vibes meet modern
        chic. Amidst the bustling streets of Kiev, this eclectic market is a haven for
        those seeking unique finds and artisanal treasures. From retro vinyl records to
        handcrafted jewelry, every corner of Kurazh Bazaar tells a story of creativity
        and passion.
      </P>
      <P>
        Picture yourself sipping on a cold brew coffee, the aroma mingling with the
        scent of freshly baked artisanal bread. As you stroll through the bazaar, you
        encounter a myriad of stalls offering everything from retro fashion to bespoke
        furniture. The air is alive with the sounds of indie bands strumming their
        guitars and the chatter of like-minded souls.
      </P>
      <P>
        Kurazh Bazaar is more than just a market; it’s a celebration of individuality
        and artistic expression. Here, you can lose yourself in the eclectic mix of old
        and new, where every item has a story and every corner invites exploration.
        Embrace the bohemian spirit and let your inner hipster thrive in this urban
        oasis.
      </P>
    </>
  );
}
```


:::info[Info]
See [Paragraph story](https://morewings.github.io/koval-ui/?path=/docs/typography-paragraph--docs).
:::

## Headers

Koval UI supports six header sizes, from `H1` to `H6`, allowing for flexible and consistent heading structures.

### Import name

```typescript
import {H1, H2, H3, H4, H5, H6} from 'koval-ui';
```

:::info[Info]
See [Headers story](https://morewings.github.io/koval-ui/iframe.html?args=&id=typography-header--primary&viewMode=story).
:::


### Demo

```jsx live
function Example(props) {
  return (
    <>
      <H1>Header 1</H1>
      <H2>Header 2</H2>
      <H3>Header 3</H3>
      <H4>Header 4</H4>
      <H5>Header 5</H5>
      <H6>Header 6</H6>
    </>
  );
}
```

## Inline elements

Koval UI provides consistent styling for various HTML inline elements, such as `a`, `small`, `sup` and so on.

### Import names

```typescript
import {A, Strong, Sup, Sub, Small, B, Mark, Ins, I, Em, Del, Kbd, Code, S} from 'koval-ui';
```
:::info[Info]
See [Inline elements story](https://morewings.github.io/koval-ui/?path=/docs/typography-inline-elements--docs).
:::

### Demo


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

## Lists

Three types of list formatting are available:

- **Ordered** lists (`Ol`)
- **Unordered** Lists (`Ul`)
- **Description** Lists (`Dl`)

:::info[Info]
See [Lists story](https://morewings.github.io/koval-ui/?path=/docs/typography-lists--docs).
:::

Each component is implemented as wrapper for `HTMLLIElements`.

### Import names

```tsx
import {Ol, Ul, Dl} from 'koval-ui';
```

### Ordered list

```jsx live
function Example(props) {
  return (
    <Ol>
      <li>Ordered item 1</li>
      <li>Ordered item 2</li>
      <li>Ordered item 3</li>
    </Ol>
  );
}
```

### Unordered list

```jsx live
function Example(props) {
  return (
    <Ul>
      <li>Unordered item 1</li>
      <li>Unordered item 2</li>
      <li>Unordered item 3</li>
    </Ul>
  );
}
```

### Description list

```jsx live
function Example(props) {
  return (
    <Dl>
      <dt>Item title 1</dt>
      <dd>Item description 1</dd>
      <dt>Item title 2</dt>
      <dd>Item description 2</dd>
      <dt>Item title 3</dt>
      <dd>Item description 3</dd>
    </Dl>
  );
}
```


## Table

A basic Table component is available, serving as a wrapper for standard HTML table elements such as `tr`, `td`, and others.

:::info[Info]
    See [Table story](https://morewings.github.io/koval-ui/?path=/docs/typography-table--docs).
:::

### Import name

```typescript
import {Table} from 'koval-ui';
```

### Demo

```jsx live
function Example(props) {
  return (
    <Table>
      <caption>He-Man and Skeletor facts</caption>
      <thead>
      <tr>
        <th>Header content 1</th>
        <th>Header content 2</th>
        <th>Header content 3</th>
        <th>Header content 4</th>
        <th>Header content 5</th>
        <th>Header content 6</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Body content 1</td>
        <td>
          Sip on locally brewed kombucha as you wander through stalls adorned with
          bohemian tapestries and indie art. The air is filled with the aroma of freshly
          ground coffee and the sound of live acoustic sets. It’s not just a market; it’s
          a community where free spirits gather to celebrate individuality and style.
        </td>
        <td>Body content 3</td>
        <td>Body content 4</td>
        <td>Body content 5</td>
        <td>Body content 6</td>
      </tr>
      <tr>
        <td>Body content 1</td>
        <td>Body content 2</td>
        <td>Body content 3</td>
        <td>Body content 4</td>
        <td>Body content 5</td>
        <td>Body content 6</td>
      </tr>
      <tr>
        <td>Body content 1</td>
        <td>Body content 2</td>
        <td>Body content 3</td>
        <td>Body content 4</td>
        <td>Body content 5</td>
        <td>Body content 6</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <th>Footer content 1</th>
        <th>Footer content 2</th>
        <th>Footer content 3</th>
        <th>Footer content 4</th>
        <th>Footer content 5</th>
        <th>Footer content 6</th>
      </tr>
      </tfoot>
    </Table>
  );
}
```
