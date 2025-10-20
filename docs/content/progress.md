---
sidebar_position: 5
---

# Progress

`Progress` is a visual indicator used to show the completion status of a task or process. It provides feedback to the user about the progress of an ongoing operation, such as file uploads, downloads, or form submissions.

## Demo

```jsx live
//import {Audio} from 'koval-ui';

function Example(props) {
  return (
    <Fragment>
      <Progress label="Determinate progress" value={33} max={100} variant="plain" />
      <Progress label="Indeterminate progress" max={100} variant="plain" />
    </Fragment>
  );
}
```

## Props

### `value`

type: `number`

Provide value for progress scale

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#value).

### `max`

type: `number`

Provide maximum for progress scale

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#max).

### `variant`

type: `'plain' | 'dashed'`

Choose the appearance of the progress bar

### `label`

type: `string`

Provide an optional label to display on the left side
