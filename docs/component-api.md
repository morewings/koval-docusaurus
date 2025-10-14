---
sidebar_position: 3
---

# Component API

## HTMLElement attributes

Every component in Koval library supports following props, which mimic native HTMLComponent props. Full set of **WAI-ARIA attributes** is supported as well.

```ts
import type {AriaAttributes, HTMLAttributes} from 'react';

export type LibraryProps = AriaAttributes & {
    id?: string;
    /**
     * Set native ARIA role attribute
     * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
     */
    role?: HTMLAttributes<HTMLElement>['role'];
    /**
     * Specify additional CSS class. This allows you to use styled(Component)
     * or the css prop in styled-components or emotion.
     */
    className?: HTMLAttributes<HTMLElement>['className'];
};
```

## data- attributes

Each component supports free from `data-${string}` attributes. The value type should be `string`;

```tsx
import {Button} from 'koval-ui';

<Button data-foo="bar" />;
```

## React references

Developer can provide a React reference for each component.

```tsx
import {useRef} from 'react';
import {Button} from 'koval-ui';

const ref = useRef<HTMLButtonElement>(null);

<Button ref={ref} />;
```

## Locale API

Koval components support localization features where it's applicable.

### User locale

Many components support `locale` prop, which allows setting formatting according to user country standards.

```jsx live
//import {NameRegion} from 'koval-ui';

function Example(props) {
  // Will display country name in Standard Moroccan Tamazight locale
  return <NameRegion countryCode="SE" locale="zgh-Tfng-MA" />;
}
```

### Country codes

`Flag` component uses a two-letter ISO 3166 region code.

```jsx live
//import {Flag} from 'koval-ui';

function Example(props) {
  return <Flag countryCode="DE" size={66} />;
}
```

### Currency codes

`NumberCurrency` component uses ISO 4217 currency code.

```jsx live
//import {NumberCurrency} from 'koval-ui';

function Example(props) {
  return <NumberCurrency currency="EUR" value={1234567890} />;
}
```

### Language codes

```jsx live
//import {NameLanguage} from 'koval-ui';

function Example(props) {
  return <NameLanguage languageCode="nb" />;
}
```
