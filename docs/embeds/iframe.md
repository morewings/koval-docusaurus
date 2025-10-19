# Iframe embed

Koval UI provides a utility component `Iframe` which adds improvements on top of `HTMLIFrameElement`.

## Features

- **Responsive**. `Iframe` respects parent element's size and collapses if needed. Developers have to provide `width` and `height` props required to render `HTMLIFrameElement`;
- **Flexible permissions config**. Developers can use `sandboxConfig` and `permissionsConfig` props, which allow better modification than `sandbox` and `allow` html attributes. See below.

## Demo

```jsx live
function Example(props) {
  const permissionsConfig = {
    accelerometer: true,
    autoplay: true,
    'clipboard-write': true,
    'encrypted-media': true,
    gyroscope: true,
    'picture-in-picture': true,
    'web-share': true,
  };
  const sandboxConfig = {
    'allow-downloads': true,
    'allow-downloads-without-user-activation': true,
    'allow-forms': true,
    'allow-modals': true,
    'allow-orientation-lock': true,
    'allow-pointer-lock': true,
    'allow-popups': true,
    'allow-popups-to-escape-sandbox': true,
    'allow-presentation': true,
    'allow-same-origin': true,
    'allow-scripts': true,
    'allow-storage-access-by-user-activation': true,
    'allow-top-navigation': true,
    'allow-top-navigation-by-user-activation': true,
    'allow-top-navigation-to-custom-protocols': true,
  };
  return (
    <Iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=dFPV1emazW5GQntR"
      width={560}
      height={315}
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen={true}
      name="rickroll"
      title="YouTube video player"
      sandboxConfig={sandboxConfig}
      permissionsConfig={permissionsConfig}
    />
  );
}
```

:::info[Info]
See `Iframe` playground and full props description at the [Storybook
page](https://morewings.github.io/koval-ui/?path=/docs/components-iframe--docs).
:::

## `sandbox` permissions

`sandboxConfig` property is responsible for managing the [sandbox permissions](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox). But instead of using flat string, Koval uses the config object.

### Basic Permissions

#### Downloads

- `'allow-downloads'`: Enables downloading files via `a` or `area` elements with the download attribute, including programmatic downloads initiated without user interaction.
- `'allow-downloads-without-user-activation'`: Allows downloads to occur without requiring any user gesture (click, tap, etc.).

#### Forms

- `'allow-forms'`: Permits form submissions and validation processes to function normally. Without this, forms will appear but not submit data or trigger validations.

#### Modals

- `'allow-modals'`: Enables the use of modal dialogs via `alert()`, `confirm()`, `print()` and `prompt()`. Also allows receiving `BeforeUnloadEvent` events.

### Navigation Control

- `'allow-orientation-lock'`: Grants permission to lock screen orientation (portrait/landscape).
- `'allow-pointer-lock'`: Enables the Pointer Lock API for more immersive experiences.
- `'allow-popups'`: Allows opening pop-up windows via `window.open()`, target="\_blank", etc. Without this, popup attempts will silently fail.
- `'allow-popups-to-escape-sandbox'`: Permits pop-ups to open outside the sandbox restrictions, useful for third-party content like ads linking to external sites.

### Security Features

- `'allow-same-origin'`: If omitted, the resource is treated as cross-origin by default (more secure). Including this allows access to same-domain resources.
- `'allow-scripts'`: Enables JavaScript execution within the iframe (required for interactive content). Without this, scripts will be blocked.
- `'allow-storage-access-by-user-activation'`: Allows requesting access to unpartitioned cookies via the Storage Access API after user interaction.

### Advanced Options

- `'allow-presentation'`: Grants control over whether the iframe can initiate presentation sessions (like slideshows).
- `'allow-top-navigation'`: Permits navigating the top-level browsing context (the main browser tab/window). Use with caution as this weakens security.
- `'allow-top-navigation-by-user-activation'`: Allows navigation to the top level only when initiated by a user action (more secure than full `allow-top-navigation`).
- `'allow-top-navigation-to-custom-protocols'`: Enables navigating to non-HTTP protocols registered with the browser.

## `allow` permissions

`permissionsConfig` property is responsible for managing the [permissions policy of the iframe](https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy). We also provide a config object for this.

We're extending on top of default `allow` attribute which expects configuration as a flat string. There are some keywords surrounded by quotes, though urls aren't. Semicolon used as delimiter

### HTML attribute

```html
<iframe
  allow="geolocation 'self' https://a.example.com https://b.example.com; accelerometer *"></iframe>
```

### Koval config

Koval UI makes this config more jsx friendly and easier to read.

Each [permission](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy) is a config property with its own name. Developers can provide one or many values to each property.

:::info[Info]
See `Iframe` playground with all supported permissions
[here](https://morewings.github.io/koval-ui/?path=/story/components-iframe--with-full-permissions).
:::

```typescript
type Permission = `https://${string}` | 'self' | '*' | 'src' | 'none' | boolean;

export type PermissionsConfig = {
  /**
   * Controls whether the iframe is allowed
   * to gather information about the acceleration of the device through the Accelerometer interface.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy/accelerometer
   */
  accelerometer?: Permission | Permission[];
  //...
};
```

Also, it is possible to set permissions as a boolean variable. It is an equivalent for `<iframe allow="accelerometer" />`.

```tsx
<Iframe permissionsConfig={{accelerometer: true}} />
```
