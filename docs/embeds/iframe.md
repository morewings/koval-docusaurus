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

```typescript
type SandboxConfig = {
  /**
   * Allows downloading files through an <a> or <area> element with the download attribute,
   * as well as through the navigation that leads to a download of a file.
   * This works regardless of whether the user clicked on the link,
   * or JS code initiated it without user interaction.
   */
  'allow-downloads'?: boolean;
  /**
   * Allows for downloads to occur without a gesture from the user.
   */
  'allow-downloads-without-user-activation'?: boolean;
  /**
   * Allows the page to submit forms.
   * If this keyword is not used, the form will be displayed as normal,
   * but submitting it will not trigger input validation,
   * sending data to a web server or closing a dialog.
   */
  'allow-forms'?: boolean;
  /**
   * Allows the page to open modal windows by Window.alert(),
   * Window.confirm(), Window.print() and Window.prompt(),
   * while opening a <dialog> is allowed regardless of this keyword.
   * It also allows the page to receive BeforeUnloadEvent event.
   */
  'allow-modals'?: boolean;
  /**
   * Lets the resource lock the screen orientation.
   */
  'allow-orientation-lock'?: boolean;
  /**
   * Allows the page to use the Pointer Lock API.
   */
  'allow-pointer-lock'?: boolean;
  /**
   * Allows popups (like from Window.open(), target="_blank", Window.showModalDialog()).
   * If this keyword is not used, that functionality will silently fail.
   */
  'allow-popups'?: boolean;
  /**
   * Allows a sandboxed document
   * to open a new browsing context without forcing the sandboxing flags upon it.
   * This will allow, for example, a third-party advertisement
   * to be safely sandboxed without forcing the same restrictions upon the page the ad links to.
   * If this flag is not included, a redirected page, popup window,
   * or new tab will be subject to the same sandbox restrictions as the originating <iframe>.
   */
  'allow-popups-to-escape-sandbox'?: boolean;
  /**
   * Allows embedders to have control over whether an iframe can start a presentation session.
   */
  'allow-presentation'?: boolean;
  /**
   * If this token is not used,
   * the resource is treated as being from a special origin that always fails the same-origin policy
   * (potentially preventing access to data storage/cookies and some JavaScript APIs).
   */
  'allow-same-origin'?: boolean;
  /**
   * Allows the page to run scripts (but not create pop-up windows).
   * If this keyword is not used, this operation is not allowed.
   */
  'allow-scripts'?: boolean;
  /**
   * Allows a document loaded in the <iframe>
   * to use the Storage Access API to request access to unpartitioned cookies.
   */
  'allow-storage-access-by-user-activation'?: boolean;
  /**
   * Lets the resource navigate the top-level browsing context (the one named _top).
   */
  'allow-top-navigation'?: boolean;
  /**
   * Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.
   */
  'allow-top-navigation-by-user-activation'?: boolean;
  /**
   * Allows navigations to non-http protocols built into a browser or registered by a website.
   * This feature is also activated by allow-popups or allow-top-navigation keyword.
   */
  'allow-top-navigation-to-custom-protocols'?: boolean;
};
```

## `allow` permissions

`permissionsConfig` property is responsible for managing the [permissions policy of the iframe](https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy). We also provide a config object for this.

We're extending on top of default `allow` attribute which expects configuration as a flat string. There are some keywords surrounded by quotes, though urls aren't. Semicolon used as delimiter

### HTML attribute

```html
<iframe
  allow="geolocation 'self' https://a.example.com https://b.example.com; accelerometer *"
></iframe>
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
<Iframe permissionsConfig={{ accelerometer: true }} />
```
