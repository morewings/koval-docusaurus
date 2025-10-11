# Quickstart

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
