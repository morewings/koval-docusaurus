---
sidebar_position: 2
---

# Carousel

`Carousel` component allows users to cycle through a series of content items, such as images or text, within a single container. It includes navigation controls. It supports properties for setting dimensions, default visible item, autorotation interval, and visibility of navigation dots and arrows.

`Carousel` supports responsive width (e.g., shrinking to fit 100% available size on smaller screens).

## Demo

```jsx live
//import {Carousel, Picture} from 'koval-ui';

function Example(props) {
  return (
    <Carousel
      width={666}
      height={333}
      // autorotate={12}
      defaultVisible={0}
      showDots={true}
      showArrows={true}>
      <Picture
        src="https://picsum.photos/666/333?1"
        width={666}
        height={333}
        alt="Image description"
      />
      <Picture
        src="https://picsum.photos/666/333?2"
        width={666}
        height={333}
        alt="Image description"
      />
      <Picture
        src="https://picsum.photos/666/333?3"
        width={666}
        height={333}
        alt="Image description"
      />
      <Picture
        src="https://picsum.photos/666/333?4"
        width={666}
        height={333}
        alt="Image description"
      />
      <Picture
        src="https://picsum.photos/666/333?5"
        width={666}
        height={333}
        alt="Image description"
      />
      <Picture
        src="https://picsum.photos/666/333?6"
        width={666}
        height={333}
        alt="Image description"
      />
    </Carousel>
  );
}
```

## Props

### `width`

type: `number` required

Carousel with in pixels

### `height`

type: `number` required

Carousel height in pixels

### `defaultVisible`

type: `number`

Initially visible cell index (starting from 0)

### `showDots`

type: `boolean`

Show navigation dots

### `showArrows`

type: `boolean`

Enable arrow navigation

### `exposedMode`

type: `boolean`

Enable to see display backstage

### `autoRotate`

type: `number`

Provide a time interval in seconds to auto rotate Carousel

### `onRotate`

type: `(index: number) => void`

Callback when a user clicks navigation arrows
