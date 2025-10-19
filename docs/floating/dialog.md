---
sidebar_position: 6
---

# Dialog

`Dialog` renders a modal over the main content flow. Allows global control of the various dialog windows.

## Demo

```jsx live
//import {useDialogState, Button, Dialog, P} from 'koval-ui';

function Example(props) {
  const id = 'foo';

  const {openDialog} = useDialogState(id);
  const handleOpen = useCallback(() => {
    openDialog();
  }, [openDialog]);

  return (
    <Fragment>
      <Button onClick={handleOpen}>Open dialog</Button>
      <Dialog
        closeOnClickOutside={true}
        showCloseButton={true}
        closeLabel="Close"
        trapFocus={true}
        animation="slide-top"
        id={id}
        dialogTitle="This is the title of dialog!">
        <P>
          In the heart of Podil, street art tells stories of the past and present. Murals
          adorn the walls, each one a masterpiece that captures the essence of this
          eclectic district. Vinyl records spin in cozy cafes, where baristas craft lattes
          with intricate foam art. It’s a place where creativity flows as freely as the
          Dnipro River.
        </P>
      </Dialog>
    </Fragment>
  );
}
```

## Props

### `id`

type: `string` (required)

Provide unique id for Dialog

### `dialogTitle`

type: `string`

Set a title of Dialog

### `closeLabel`

type: `string`

Provide a localized value for close button

### `showCloseButton`

type: `boolean`

Display a close icon at the right top corner

### `closeOnClickOutside`

type: `boolean`

Dismiss `Dialog` when the user clicks anywhere on the page

### `trapFocus`

type: `boolean`

Enable a focus trap for `Dialog`

### `animation`

type: `'slide-top' | 'scale-in'`

Select `Dialog` enter/exit animation style

### `onToggle`

type: `(open: boolean) => void`

Callback triggered when Dialog toggles

### `actions`

type: `Array<ComponentProps<typeof ActionButton> | [ComponentProps<typeof ActionButton>, ComponentProps<typeof ActionButton>]>`

Provide an array of actions with callbacks

## `useDialogState` hook interface

`useDialogState` uses _Koval Global Context_, so it works anywhere in the application. Developers can put `Dialog` in the other component.

### `openDialog`

Show a dialog to the user. `openDialog` allows sending additional parameters to be used inside Dialog.

```ts
const {openDialog} = useDialogState('foo');

const handleClick = useCallback(() => {
  openDialog(params?: Record<string, unknown>);
}, [openDialog]);
```

### `closeDialog`

Hide dialog.

```js
const {closeDialog} = useDialogState('foo');

const handleClick = useCallback(() => {
  closeDialog();
}, [closeDialog]);
```

### `isOpen`

Current visibility of the dialog.

### `dialogParams`

Reports current `Dialog` parameters from the global state.

## Multiple `Dialogs`

It's possible to have multiple active dialogs on the page. E.g., when a developer wants to show another modal window from currently active. Global state is built on _first in - last out_ principle.

### Example

```jsx live
//import {useDialogState, Button, Dialog, P} from 'koval-ui';

function Example(props) {
  const {closeDialog: closeFirst, openDialog: openFirst} = useDialogState('baz');
  const {closeDialog: closeSecond, openDialog: openSecond} = useDialogState('qux');

  const actionsFirst = useMemo(
    () => [
      [
        {title: 'Close First', type: 'danger', onClick: closeFirst},
        {
          title: 'Open Second',
          type: 'success',
          onClick: () => {
            openSecond();
          },
        },
      ],
    ],
    [closeFirst, openSecond]
  );

  const actionsSecond = useMemo(
    () => [{title: 'Close Second', type: 'danger', onClick: closeSecond}],
    [closeSecond]
  );

  return (
    <Fragment>
      <ButtonGroup>
        <Button onClick={openFirst}>Open first Dialog</Button>
        <Button onClick={openSecond}>Open second Dialog</Button>
      </ButtonGroup>
      <Dialog id="baz" actions={actionsFirst} showCloseButton={false}>
        <P>
          This is <Strong>first</Strong> Dialog.
        </P>
      </Dialog>
      <Dialog id="qux" actions={actionsSecond} showCloseButton={false}>
        <P>
          This is <Strong>second</Strong> Dialog.
        </P>
      </Dialog>
    </Fragment>
  );
}
```

## Configuring actions

See the [Actions API](/docs/floating/actions) page
