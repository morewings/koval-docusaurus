---
sidebar_position: 4
---

# Menu

`Menu` is a floating element that displays a list of options or actions to the user.

## Demo

### Generic `Menu`

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
      content={<div>This is menu.</div>}
      variant="bordered"
      isOpen={isOpen}
      onToggle={handleToggle}>
      <Button onClick={handleClick}>Toggle Menu</Button>
    </Menu>
  );
}
```

### Clickable list: `MenuActions`

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
      {title: 'With Custom Icon', icon: FlyingSaucerIcon, onClick: handleActionClick},
      {title: 'Link Action', type: 'link', onClick: handleActionClick},
      {title: 'Extra long name action', type: 'link', onClick: handleActionClick},
      {title: 'Danger Action', type: 'danger', onClick: handleActionClick},
      {title: 'Success Action', type: 'success', onClick: handleActionClick},
    ],
    []
  );

  return (
    <MenuActions
      actions={actions}
      isOpen={isOpen}
      onToggle={handleToggle}>
      <Button onClick={handleClick}>Toggle Menu</Button>
    </MenuActions>
  );
}
```
