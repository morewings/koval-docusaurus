---
sidebar_position: 1
---

# Available themes

Koval UI ships with three themes bundled: **Podil**, **Dnipro** and **Dovzhenko**.

:::info[Storybook]
You can see and try all available themes at [Koval Storybook](https://morewings.github.io/koval-ui/).
There is also a [dedicated theme color palette story](https://morewings.github.io/koval-ui/?path=/docs/themes--docs).
:::

## Apply theme

```tsx
import type {FC} from 'react';
import {Provider, themeDnipro, themePodil, themeDovzhenko} from 'koval-ui';

export const App: FC = () => {
  // Theme Podil is set by default.
  return <Provider theme={themeDnipro}>{/*App code*/}</Provider>;
};
```

## Podil

Default theme. Named after my favorite Kiev district.

### Example

`Table` with theme applied.

<iframe
src="https://morewings.github.io/koval-ui/iframe.html?globals=&args=&id=typography-table--responsive&viewMode=story"
width={777}
height={666}
/>

## Dnipro

Complementary theme to Podil. Has brand and accent colors swapped.

### Example

`Table` with theme applied.

<iframe
src="https://morewings.github.io/koval-ui/iframe.html?globals=selectedTheme%3ADnipro&args=&id=typography-table--responsive&viewMode=story"
width={777}
height={666}
/>

## Dovzhenko

Black and white theme which may be useful for UX testing purposes. Named after Alexander Dovzhenko, a famous movie director.

### Example

`Table` with theme applied.

<iframe
src="https://morewings.github.io/koval-ui/iframe.html?globals=selectedTheme%3ADovzhenko&args=&id=typography-table--responsive&viewMode=story"
width={777}
height={666}
/>
