---
sidebar_position: 3
---

# Use Koval Theme inside CSS

All theme values provided by a theme object are available inside project CSS styles as [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).

## CSS Layers

Koval theme uses two CSS layers: `koval-reset` and `koval-components`. **Unlayered styles automatically have higher priority than layered styles**, regardless of selector specificity.

If a user wants to override a Koval UI component, they can just write standard CSS as they normally would. Because Koval's styles are inside layers, the user's unlayered CSS will always win. No `!important` tags are needed.

```css
/* Koval UI's layered CSS (behind the scenes) */
@layer koval-components {
  .koval-button {
    background-color: blue;
  }
}

/* User's custom unlayered CSS (wins automatically) */
.koval-button {
  background-color: red;
}
```

### Organizing with Custom Layers

If a user is building a complex application and wants to use layers for their own code, they can define a layer order that places their custom styles after Koval UI's styles. **The layer declared last wins.**

Users would do this at the very top of their main stylesheet before writing any other CSS:

```css
/* 1. Define the order: Koval's layers first, then the app's custom layers */
@layer koval-reset, koval-theme, koval-components, app-base, app-features;

/* 2. Import Koval UI (assuming your bundler supports layer injection) */
@import 'koval-ui/dist/index.css';

/* 3. Write custom layered CSS */
@layer app-features {
  .koval-button {
    background-color: purple; /* Overrides koval-components */
  }
}
```

## CSS Variables

All [design tokens specified in the theme object](/docs/theme/create-theme) are automatically exposed inside your project's styles as native CSS variables. They are available across all CSS layers. `--kg` (Koval Global) prefix will be added to the name and `kebab-case` used instead of `camelCase`.

```css
.element {
  color: var(--kg-color-do);
}
```

## `--kg-size-unit`

This variable defines a lowest common size denomitator. It helps to achieve visual harmony for element sizes, margins and paddings.

```css
.element {
  padding: calc(var(--kg-size-unit) * 2) calc(var(--kg-size-unit) * 3);
  width: calc(var(--kg-size-unit) * 16);
}
```

## `--kg-border-radius-*`

`--kg-border-radius-100` to `--kg-border-radius-500` defines available border radii tokens, from smaller to bigger.
