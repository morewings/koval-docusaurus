---
sidebar_position: 5
---

# Drawer

`Drawer` is a sliding panel that appears from the edge of the screen, used for navigation or to display additional content without navigating away from the current view. It can be opened and closed by any user interaction doe outside.

## Demo

```jsx live
//import {useToastState, Toast, ButtonGroup, Button} from 'koval-ui';

function Example(props) {
  const id = 'foo';

  const {isOpen, closeDrawer, openDrawer} = useDrawerState(id);

  const handleClick = useCallback(() => {
    isOpen ? closeDrawer() : openDrawer();
  }, [closeDrawer, isOpen, openDrawer]);

  return (
    <Fragment>
      <Button onClick={handleClick}>Toggle Drawer</Button>
      <Drawer id={id}>Drawer content.</Drawer>
    </Fragment>
  );
}
```

## Props

### `id`

type: `string`

Provide unique id for Drawer

### `placement`

type: `'left' | 'right'`

Choose a side to attach Drawer

## `useDrawerState` hook interface

`useDrawerState` uses _Koval Global Context_, so it works anywhere in the application. Developers can put `Drawer` in the other component.

### `openDrawer`

Show a `Drawer` to the user.

```js
const {openDrawer} = useDrawerState('foo');

const handleClick = useCallback(() => {
  openDrawer();
}, [openDrawer]);
```

### `closeDrawer`

Hide `Drawer`.

```js
const {closeDrawer} = useDrawerState('foo');

const handleClick = useCallback(() => {
  closeDrawer();
}, [closeToast]);
```

## Multiple `Drawers`

```jsx live
//import {useToastState, Toast, ButtonGroup, Button} from 'koval-ui';

function Example(props) {
  const {
    isOpen: isOpenFoo,
    closeDrawer: closeDrawerFoo,
    openDrawer: openDrawerFoo,
  } = useDrawerState('foo');
  const {
    isOpen: isOpenBar,
    closeDrawer: closeDrawerBar,
    openDrawer: openDrawerBar,
  } = useDrawerState('bar');
  const handleClickFoo = useCallback(() => {
    isOpenFoo ? closeDrawerFoo() : openDrawerFoo();
  }, [closeDrawerFoo, isOpenFoo, openDrawerFoo]);
  const handleClickBar = useCallback(() => {
    isOpenBar ? closeDrawerBar() : openDrawerBar();
  }, [closeDrawerBar, isOpenBar, openDrawerBar]);

  return (
    <Fragment>
      <ButtonGroup>
        <Button onClick={handleClickFoo}>Toggle Drawer #1</Button>
        <Button onClick={handleClickBar}>Toggle Drawer #2</Button>
      </ButtonGroup>
      <Drawer id="foo" placement="left">
        <H2>Foo drawer</H2>
      </Drawer>
      <Drawer id="bar" placement="right">
        <H2>Bar drawer</H2>
      </Drawer>
    </Fragment>
  );
}
```
