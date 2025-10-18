---
sidebar_position: 4
---

# Menu

`Menu` is a floating element that displays a list of options or actions to the user.

## Generic `Menu`

### Demo

```jsx live
//import {useToastState, Toast, ButtonGroup, Button} from 'koval-ui';

function Example(props) {
  const [isOpen, setOpen] = useState(false);
  const handleClick = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  const handleToggle = useCallback(
    openState => {
      setOpen(openState);
    },
    [setOpen]
  );

  return (
    <Menu
      content={<div>This is <Em>free-form</Em> <Sup>menu</Sup> <Sub>content</Sub></div>}
      variant="bordered"
      isOpen={isOpen}
      onToggle={handleToggle}>
      <Button onClick={handleClick}>Toggle Menu</Button>
    </Menu>
  );
}
```

### Props

#### `isOpen`

type: `boolean`

Control visibility of the `Menu`

#### `content`

type: `ReactNode`

Control visibility of the `Menu`

#### `referenceClassName`

type: `string`

Set the class name of the reference component wrapper

#### `variant`

type: `'bordered' | 'plain'`

Select design

#### `allowedPlacements`

type: `Array['top' | 'bottom' | 'left' | 'right'| ...]`

Define which relative positions `Menu` can be placed in

#### `trapFocus`

type: `boolean`

Focus on the first element when open and trap focus

#### `alignWidth`

type: `boolean`

Align Menu width with a reference element

#### `onToggle`

type: `(openState: boolean) => void`

Provide callback for open/close events

## Clickable list: `MenuActions`

`MenuActions` doesn't support `content` property. You can provide `Action` config array to `actions` prop.

### Demo

```jsx live
//import {useToastState, Toast, ButtonGroup, Button} from 'koval-ui';

function Example(props) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const handleToggle = useCallback(
    openState => {
      setOpen(openState);
    },
    [setOpen]
  );

  const handleActionClick = useCallback(() => {
    console.log('action');
  }, []);

  const actions = useMemo(
    () => [
      {title: 'Default Action', onClick: handleActionClick},
      {title: 'Link Action', type: 'link', onClick: handleActionClick},
      {title: 'Danger Action', type: 'danger', onClick: handleActionClick},
      {title: 'Success Action', type: 'success', onClick: handleActionClick},
      {title: 'With Custom Icon', icon: FlyingSaucerIcon, onClick: handleActionClick},
    ],
    []
  );

  return (
    <MenuActions
      actions={actions}
      variant="plain"
      isOpen={isOpen}
      onToggle={handleToggle}>
      <Button onClick={handleClick}>Toggle Menu</Button>
    </MenuActions>
  );
}
```

### Configuring actions

See the [Actions API](/docs/floating/actions) page
