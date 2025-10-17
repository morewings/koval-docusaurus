---
sidebar_position: 3
---

# Tooltip

`Tooltip` is a small, interactive element that provides additional information when a user hovers over or focuses on a specific element.

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
