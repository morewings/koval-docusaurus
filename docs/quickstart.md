---
sidebar_position: 1
---

# Getting started

:::info[Info 🇺🇦]

_Koval_ (`koválʹ`) is a _smith_ in Ukrainian language. See [vocabulary
definition](https://en.wiktionary.org/wiki/%D0%BA%D0%BE%D0%B2%D0%B0%D0%BB%D1%8C).

:::

## Install Koval UI

:::tip

`Rubik Variable` font is required by Koval default themes: `Podil` and `Dnipro`.

:::

```bash npm2yarn
// install Koval UI alongside with Rubik
npm i koval-ui @fontsource-variable/rubik
```

## Set up Provider and theme

Wrap your application code with a `Provider` component at the highest possible level. Include Koval UI CSS in your bundle.
There are three themes available at the moment: `themePodil`, `themeDnipro` and `themeDovzhenko`

Import Koval CSS file and necessary fonts to your bundle.

```tsx
import type {FC} from 'react';
// Import Provider and theme
// highlight-next-line
import {Provider, themePodil} from 'koval-ui';
// Include installed Rubik Variable font in the build
// highlight-next-line
import '@fontsource-variable/rubik/wght.css';
// Include Koval UI CSS in the build
// highlight-next-line
import 'koval-ui/dist/index.css';

const App: FC = () => {
  return <Provider theme={themePodil}>{/*App contents*/}</Provider>;
};
```
