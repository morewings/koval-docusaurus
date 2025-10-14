# `Picture` component

The `Picture` component is a powerful and flexible wrapper around the native `HTMLPictureElement`. While the image is loading, it displays a skeleton placeholder, which reserves the image's dimensions and prevents the page jump known as Cumulative Layout Shift (CLS). For performance, it defaults to `lazy` loading images, meaning they won't be downloaded until they are close to entering the viewport. The component's API supports both art direction and resolution switching through its flexible `sources` prop.

## Props

| Prop Name | Type                | Description                                                                         |
|-----------|---------------------|-------------------------------------------------------------------------------------|
| `src`     | `string`(required)  | Default image URL                                                                   |
| `width`   | `number`            | Set default width in pixels                                                         |
| `height`  | `number`            | Set default height in pixels                                                        |
| `alt`     | `string`            | Alternative text for accessibility and when the image fails to load                 |
| `sources` | `Source[]`          | Advanced configuration with multiple sources/formats                                |
| `loading` | `auto, lazy, eager` | Control how the image is loaded - lazy loading can improve initial page performance |

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
