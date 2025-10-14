# `Picture` component

The `Picture` component is a powerful and flexible wrapper around the native `HTMLPictureElement`. While the image is loading, it displays a skeleton placeholder, which reserves the image's dimensions and prevents the page jump known as Cumulative Layout Shift (CLS). For performance, it defaults to `lazy` loading images, meaning they won't be downloaded until they are close to entering the viewport. The component's API supports both art direction and resolution switching through its flexible `sources` prop.


