---
sidebar_position: 2
---

# Toast

`Toast` is a small, non-intrusive notification that appears temporarily on the screen to provide feedback to the user. It is used to display brief messages, such as _success_, _error_, or _informational_ alerts, without interrupting the user's workflow. Toasts appear at the bottom of the screen and can optionally automatically disappear after a short duration.

## Demo

```jsx live
//import {useToastState, Toast, ButtonGroup, Button} from 'koval-ui';

function Example(props) {
  const toastId = 'foo';

  const {openToast, closeToast} = useToastState(toastId);
  return (
    <Fragment>
      <ButtonGroup>
        <Button onClick={openToast}>Open toast</Button>
        <Button onClick={closeToast}>Close toast</Button>
      </ButtonGroup>
      <Toast id={toastId} title="Hello, world!" body="This is Toast example." />
    </Fragment>
  );
}
```

## Props

### `id`

type: `string`

Provide unique id to the `Toast`. Mandatory

### variant

type:`'default' | 'success' | 'error' | 'warning'`

Select a design variant of `Toast` to show

### `title`

type: `string`

Provide a main text to display inside `Toast`

### `body`

type: `string`

Provide an additional text to display inside `Toast`

### `icon`

type: `React.FC`

Provide an icon to show instead of the default.

### `actions`

type: `Array<ActionProps | [ActionProps, ActionProps]>`

Provide an array of actions with callbacks

### `closeLabel`

type: `string`

Provide custom label for close `Toast` action

### `onToggle`

type: `(isOpen: boolean) => void`

Callback triggered when the user closes `Toast`

### `autoClose`

type: `number`

Set time in seconds to auto close `Toast`

## `useToastState` hook interface

`useToastState` uses _Koval Global Context_, so it works anywhere in the application. Developers can put `Toast` in the other component.

### `openToast`

Show a toast to the user. Will not work from a component scope. Needs to be run as a callback

```js
const {openToast} = useToastState('foo');

// Don't do this!
openToast();

// This will work
const handleClick = useCallback(() => {
  openToast();
}, [openToast]);
```

### `closeToast`

Hide toast.

```js
const {closeToast} = useToastState('foo');

const handleClick = useCallback(() => {
  closeToast();
}, [closeToast]);
```

### `isOpen`

Current visibility of notification

## Add actions

Actions are clickable elements at the bottom of the `Toast`.

## Multiple `Toasts`

When user triggers multiple `Toasts` the newest one replaces oldest. There's no queue, so when visible `Toast` is dismissed there's nothing to show.

Hook expects a developer to provide unique `id` of `Toast` as a parameter.

```jsx live
//import {useToastState, Toast, ButtonGroup, Button} from 'koval-ui';

function Example(props) {
  const toastId = 'foo';

  const {openToast: openDefault} = useToastState('foo');
  const {openToast: openSuccess} = useToastState('bar');
  const {openToast: openError} = useToastState('bazz');
  const {openToast: openWarning} = useToastState('buzz');
  return (
    <Fragment>
      <ButtonGroup layout="vertical">
        <Button onClick={openDefault}>Open default toast</Button>
        <Button onClick={openSuccess}>Open success toast</Button>
        <Button onClick={openError}>Open error toast</Button>
        <Button onClick={openWarning}>Open warning toast</Button>
      </ButtonGroup>
      <Toast id="foo" title="This is default toast" variant="default" />
      <Toast id="bar" title="This is success toast" variant="success" />
      <Toast id="bazz" title="This is error toast" variant="error" />
      <Toast id="buzz" title="This is warning toast" variant="warning" />
    </Fragment>
  );
}
```

## Self-closing example

```jsx live
//import {useToastState, Toast, Button} from 'koval-ui';

function Example(props) {
  const toastId = 'foo';

  const {openToast, closeToast} = useToastState(toastId);
  return (
    <Fragment>
      <Button onClick={openToast}>Open self-closing toast</Button>
      <Toast
        id={toastId}
        title="Capre diem!"
        body="I will close in 10 seconds."
        autoClose={10}
      />
    </Fragment>
  );
}
```
