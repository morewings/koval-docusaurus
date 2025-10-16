---
sidebar_position: 3
---

# Component API

## HTMLElement attributes

Every component in Koval library supports the following props, which mimic native HTMLComponent props.

### `aria-*: string`

A full set of **WAI-ARIA attributes** is supported. See the [full list](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes).

### `id: string`

Description: A unique identifier for the component, useful for accessibility and styling purposes.

### `role: HTMLAttributes<HTMLElement>['role']`
Set a native ARIA role attribute to define the component's semantic purpose. See [MDN documentation on ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) for available options.

### `className: string` (optional)

Add custom CSS classes to style the component using your preferred styling solution (CSS Modules, Styled Components, Emotion, etc.). This enables you to create unique visual designs while maintaining accessibility best practices.


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
