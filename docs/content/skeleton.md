---
sidebar_position: 6
---

# Skeleton

`Skeleton` is a placeholder that mimics the structure of the content that is being loaded. It provides a visual indication to users that content is being loaded and helps to improve the perceived performance of an application by showing a preview of the layout before the actual content is available.

## Demo

Shape that mimics [Card component](/docs/content/card) with two actions.

```jsx live
//import {
// SkeletonFrame,
// SkeletonShape,
// SkeletonText,
// SkeletonAction
// } from 'koval-ui';

function Example(props) {
  return (
    <SkeletonFrame width={480}>
      <SkeletonShape height={240} />
      <SkeletonText />
      <SkeletonAction double={true} />
    </SkeletonFrame>
  );
}
```

## Props

:::tip

You can use commonly available `className` prop for more granular styling.

:::

### `width`

type: `number | 'fluid'`

Set a width for a Skeleton component. Can be `number` in pixels or `fluid` which takes all available width.

### `height`

type: `number | 'fluid'`

Set a height for a Skeleton component. Can be `number` in pixels or `fluid` which takes all available height.

### `marginY`

type: `number`

Set a vertical margin for a Skeleton component in pixels.

### `marginX`

type: `number`

Set a horizontal margin for a Skeleton component in pixels.

### `borderRadius`

type: `number`

Set a CSS `border-radius` for a Skeleton component.

### `borderRadius`

type: `number`

Set a CSS `border-radius` for a Skeleton component.

### `double`

type: `boolean`

Mimic double buttons, applies to `SkeletonAction`

### `lines`

type: `number`

Set an approximate number of lines (height) for `SkeletonText`
