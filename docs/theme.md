---
sidebar_position: 2
---

# Apply theme

Koval UI supports theming colors, sizes and fonts via **Provider** component `theme` prop.

```tsx
import type {FC} from 'react';
import {Provider} from 'koval-ui';
import {theme} from './theme';

export const App: FC = () => {
    return <Provider theme={theme}>{/*App code*/}</Provider>;
};
```

## Available themes

Koval ships with three themes bundled: **Podil**, **Dnipro** and **Dovzhenko**.

:::info[Info]
You can see and try all available themes at [Koval Storybook](https://morewings.github.io/koval-ui/).
There is also a [dedicated theme color palette story](https://morewings.github.io/koval-ui/?path=/docs/themes--docs).
:::

```tsx
import type {FC} from 'react';
import {Provider, themeDnipro, themePodil, themeDovzhenko} from 'koval-ui';

export const App: FC = () => {
    // Theme Podil is set by default.
    return <Provider theme={themeDnipro}>{/*App code*/}</Provider>;
};
```

## Create custom theme

### Set theme

Koval theme is `Record` containing various design tokens as key/value pairs. They are set via `theme` property of Koval Provider component. Library contains `ThemeType` export to help user validate their theme.

```tsx {5-7, 10}
import type {FC} from 'react';
import type {ThemeType} from 'koval-ui';
import {Provider} from 'koval-ui';

export const theme: ThemeType = {
    // provide custom theme properties
};

export const App: FC = () => {
    return <Provider theme={theme}>{/*App code*/}</Provider>;
};
```

### Consume theme

The theme will be used by Koval components and also available to user as set of CSS Variables.

```css
.element {
    /* NB! --kg (Koval Global) prefix is added and kebab-case used instead of camelCase */
    color: var(--kg-color-do);
}
```

### Brand colors

Koval uses 6 brand colors. 3 main and 3 alternative. Music note names are used to distinguish them.

```tsx
import type {ThemeType} from 'koval-ui';

export const theme: ThemeType = {
    /**
     * First brand color. It is most visible in the theme.
     * Has to make a good contrast with background000 and background600
     */
    colorDo: '#e3a075',
    /**
     * Second brand color. Darkest one. Has to make a good contrast with background000 and colorDo
     */
    colorRe: '#61483a',
    /**
     * Third brand color. Lightest one. Has to make a good contrast with background600 and colorDo
     */
    colorMi: '#ffdea6',
    /**
     * First alternative brand color. Used when needed to create an accented contrast with colorDo.
     * Has to make a good contrast with background000 and background600
     */
    colorFa: '20b2aa',
    /**
     * Second alternative brand color. Darkest one.
     * Has to make a good contrast with background000 and colorFa
     */
    colorSol: '#597480',
    /**
     * Third alternative brand color. Lightest one.
     * Has to make a good contrast with background600 and colorFa
     */
    colorLa: '#99DFFF',
};
```

### Fonts

There are two font-families used: main and mono (for monospaced text).

```tsx
import type {ThemeType} from 'koval-ui';

// NB! Random colors assigned. Not a real theme.
export const theme: ThemeType = {
    /**
     * Main font used by most components of library
     */
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    /**
     * Monospaced font used by <code> and <pre>
     */
    fontFamilyMonospace: `"SF Mono", "Courier New", FreeMono, "Nimbus Mono PS", Cousine, monospace`,
    /**
     * Arbitrary text font size. Used by P element. Expected to be most readable
     */
    fontSizeText: '16px',
    /**
     * Medium font size
     */
    fontSizeMedium: '16px',
    /**
     * Large font size
     */
    fontSizeLarge: '18px',
    /**
     * Small font size
     */
    fontSizeSmall: '14px',
    /**
     * Default font weight. Expected to be most readable
     */
    fontWeightNormal: 400,
    /**
     * Bolder font weight. Expected to look outstanding comparing to normal
     */
    fontWeightBolder: 500,
    /**
     * Bold font weight. Expected to look outstanding comparing to bolder
     */
    fontWeightBold: 600,
    /**
     * Default text color. Expected to be most readable
     */
    textColor: '#111111',
};
```
