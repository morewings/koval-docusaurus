# `Picture` component

The `Picture` component is a powerful and flexible wrapper around the native `HTMLPictureElement`. While the image is loading, it displays a skeleton placeholder, which reserves the image's dimensions and prevents the page jump known as Cumulative Layout Shift (CLS). For performance, it defaults to `lazy` loading images, meaning they won't be downloaded until they are close to entering the viewport. The component's API supports both art direction and resolution switching through its flexible `sources` prop.

## Props

### `src`

type: `string` required

Provide default image url

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src)

### `width`

type: `number`

Set default image width

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/width)

### `height`

type: `number`

Set default image height

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/height)

### `alt`

type: `string`

Provide alternate text to display when the image is not loaded or for use by assistive devices

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)

### `sources`

type: `Source[]`

Provide alternative sources configs array

### `loading`

type: `'auto' | 'lazy' | 'eager'`

Set image loading behavior

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading)

## Single source

For a simple use case, you can use the `Picture` component like a standard `img` tag. By providing `src`, `alt`, `width`, and `height`, you get the benefits of `lazy` loading and a skeleton placeholder right out of the box.

```jsx live
//import {Picture} from 'koval-ui';

function Example(props) {
  return (
    <Picture
      // loading="lazy" set by default
      width={666}
      height={333}
      src="https://picsum.photos/666/333"
      alt="Example image"
    />
  );
}
```

## Multiple sources

:::warning Unstable feature

🚧 This API is still experimental and may not work as expected.

:::

`sources` prop accepts an array of `Source` objects. This allows developers to define different image files for various conditions like viewport size, screen density, or browser format support.

### `mediaCondition`

You might want to show a wide landscape image on a desktop screen but a tighter, portrait-oriented crop on a mobile device. You can achieve this using the `mediaCondition` property.

```jsx live
//import {Picture} from 'koval-ui';

function Example(props) {
  return (
    <Picture
      src="https://picsum.photos/333/333"
      alt="Example image"
      sources={[
        {
          src: 'https://picsum.photos/555/333', // Source for larger screens
          mediaCondition: '(min-width: 768px)',
        },
      ]}
    />
  );
}
```
