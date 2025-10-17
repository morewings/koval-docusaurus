---
sidebar_position: 1
---

# Notification

Notification is the least intrusive component from the group. It uses browser [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) to show user system notification.

:::info[Storybook]
See [Notification component story](https://morewings.github.io/koval-ui/?path=/docs/components-notification--docs).
:::

Notifications are managed globally via `useNotificationState` hook. So developers can control notifications from anywhere in the app or website.

## Demo

:::warning[iOS Safari]
Notifications API works differently in iOS Safari (and other browsers). They allow notifications only for _progressive web applications_. So you need to click **Add to home screen** and open the page from here to enable notifications.
:::

```jsx live
//import {useNotificationState, Notification, ButtonGroup, Button} from 'koval-ui';

function Example(props) {
  const notificationId = 'foo';

  const {openNotification, closeNotification} = useNotificationState(notificationId);
  return (
    <Fragment>
      <ButtonGroup layout="vertical">
        <Button onClick={openNotification}>open notification</Button>
        <Button onClick={closeNotification}>close notification</Button>
      </ButtonGroup>
      <Notification
        id={notificationId}
        requireInteraction={false}
        title="Foo notification"
        body="Notification body"
        icon="https://picsum.photos/33/33"
      />
    </Fragment>
  );
}
```

## Props

### `id`

type: `string`

Unique id of notification.

### `onToggle`

type: `(isOpen: boolean) => void`

Callback triggered when Notification toggles.

### `onDenied`

type: `() => void`

Callback triggered when a user has denied notifications in browser settings

### `title`

type: `string`

Defines a title for the notification, which is shown at the top of the notification window.

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification#title)

### `icon`

type: `string`

URL of an image to be displayed in the notification.

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification#icon)

### `body`

type: `string`

Body text of the notification, which is displayed below the title.

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification#body)

### `requireInteraction`

type: `boolean`

Indicates that a notification should remain active until the user clicks or dismisses it, rather than closing automatically.

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification#requireinteraction)

## `useNotificationState` hook interface

`useNotificationState` uses _Koval Global Context_, so it works anywhere in the application. Developers can put `Notification` in the other component.

Hook expects a developer to provide unique `id` of `Notification` as a parameter.

### `openNotification`

Show a notification to the user. Will not work from a component scope. Needs to be run as a callback

```js
const {openNotification} = useNotificationState('foo');

// Don't do this!
openNotification();

// This will work
const handleClick = useCallback(() => {
  openNotification();
}, [openNotification]);
```

### `closeNotification`

Hide notification.

```js
const {closeNotification} = useNotificationState('foo');

const handleClick = useCallback(() => {
  closeNotification();
}, [closeNotification]);
```

### `isOpen`

Current visibility of notification

### `permission`

Indicates the current permission granted by the user for the current origin to display web notifications.

- `default`: The user decision is unknown. E.g. first visit.
- `granted`: The user has explicitly granted permission for the current origin.
- `denied`: The user has explicitly denied permission for the current origin.

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission_static)



## Handling permissions

Browsers allow users to disable system notifications globally or for specific URL. ≈`Notification` component will emit `onDenied` callback and `permission` value received from the hook will be `denied`. You can fall back to using [Toast](/docs/floating/toast).
