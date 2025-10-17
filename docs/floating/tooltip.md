---
sidebar_position: 3
---

# Tooltip

`Tooltip` is a small, interactive element that provides additional information when a user hovers over or focuses on a specific element.

## Demo

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
    <Tooltip
      isOpen={isOpen}
      onToggle={handleToggle}
      content={<P>This is tooltip example.</P>}>
      <Button onClick={handleClick}>Toggle Tooltip</Button>
    </Tooltip>
  );
}
```

## Props

### `isOpen`

type: `boolean`

Control visibility of `Tooltip`

### `content`

type: `ReactNode`

Provide `Tooltip` content

### `referenceClassName`

type: `string`

Set the class name of the reference component wrapper

### `placement`

type: `'top' | 'bottom' | 'left' | 'right'| ...`

Define recommended placement for `Tooltip` content, applied when possible

### `onToggle`

type: `(openState: boolean) => void`

Provide callback for open/close events
