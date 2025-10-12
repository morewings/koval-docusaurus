---
sidebar_position: 1
---

# Quickstart

:::info[Info 🇺🇦]

_Koval_ (`koválʹ`) is a _smith_ in Ukrainian language. See [vocabulary
definition](https://en.wiktionary.org/wiki/%D0%BA%D0%BE%D0%B2%D0%B0%D0%BB%D1%8C).

:::

## Install Koval UI

```bash npm2yarn
npm i koval-ui
```

## Set up Provider and theme

Wrap your application code with a `Provider` component at the highest possible level. Include Koval UI CSS in your bundle.
There are three themes available at the moment: `themePodil`, `themeDnipro` and `themeDovzhenko`

```tsx
import type {FC} from 'react';
import {Provider, themePodil} from 'koval-ui';
import 'koval-ui/dist/style.css';

const App: FC = () => {
    return <Provider theme={themePodil}>{/*App contents*/}</Provider>;
};
```
