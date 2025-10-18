---
sidebar_position: 8
---

# ⚙️ Actions API

Some floating components (`Toast`, `Dialog`, `Menu`) are designed to be interactive, i.e., being able to accept user's input. Koval UI offers Actions API to implement this functionality.

`Actions` are clickable items rendered inside floating components.

## Demo

```jsx live
//import {useToastState, Toast, ButtonGroup, Button} from 'koval-ui';

function Example(props) {
  // Shared actions
  const handleActionClick = useCallback(() => {
    console.log('click');
  }, []);

  const actions = useMemo(
    () => [
      {title: 'Default Action', onClick: handleActionClick},
      {title: 'Link Action', type: 'link', onClick: handleActionClick},
      {title: 'Danger Action', type: 'danger', onClick: handleActionClick},
      {title: 'Success Action', type: 'success', onClick: handleActionClick},
      {title: 'With Custom Icon', icon: FlyingSaucerIcon, onClick: handleActionClick},
      [
        {title: 'Negative', type: 'danger', onClick: handleActionClick},
        {title: 'Positive', type: 'success', onClick: handleActionClick},
      ],
    ],
    [handleActionClick]
  );

  // Toast logic
  const toastId = 'foo';

  const {openToast, closeToast} = useToastState(toastId);

  // Dialog logic
  const dialogId = 'foo';

  const {openDialog} = useDialogState(dialogId);

  const handleOpen = useCallback(() => {
    openDialog();
  }, [openDialog]);

  // Menu logic
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = useCallback(() => {
    setMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const handleMenuToggle = useCallback(
    openState => {
      setMenuOpen(openState);
    },
    [setMenuOpen]
  );

  return (
    <Fragment>
      <ButtonGroup>
        <Button onClick={openToast}>Open toast</Button>
        <Button onClick={handleOpen}>Open dialog</Button>
        <MenuActions
          onToggle={handleMenuToggle}
          actions={actions}
          variant="plain"
          isOpen={isMenuOpen}>
          <Button onClick={handleMenuClick}>Toggle Menu</Button>
        </MenuActions>
      </ButtonGroup>
      <Toast id={toastId} title="Toast with actions" actions={actions} />
      <Dialog id={dialogId} actions={actions} dialogTitle="Dialog with actions">
        <P>Hello, world!</P>
      </Dialog>
    </Fragment>
  );
}
```

## Action config

Each `Action` is described as a config object. Array of `Actions` is passed to the same name component prop.

### `title`

type: `string`

Set a clickable text

### `icon`

type: `FC<HTMLAttributes<HTMLOrSVGElement> & unknown>`

Provide a custom icon prefix for the Action. Will be used instead of the default one

### `disabled`

type: `boolean`

Make Action non-clickable

### `type`

type: `'default' | 'success' | 'link' | 'danger'`

Choose a visual style of the action. All types except default are coming with icon prefixes

### `onClick`

type: `(name: MouseEvent<HTMLButtonElement>) => void`

Provide callback for clicks

## Double actions

It's possible to provide two actions for the same line.
This allows conveniently asking the user _yes or no_ questions.

```jsx
const actions = [
  [
    {title: 'Negative', type: 'danger', onClick: handleActionClick},
    {title: 'Positive', type: 'success', onClick: handleActionClick},
  ],
]
```
