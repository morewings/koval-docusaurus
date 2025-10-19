---
sidebar_position: 3
---

# Use Koval theme inside CSS

All theme values provided by a theme object are available inside project CSS styles as [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).

## Variable names

All [design tokens specified in theme object](/docs/theme/create-theme) will be available here. `--kg` (Koval Global) prefix will be added to the name and `kebab-case` used instead of `camelCase`.

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
