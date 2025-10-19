---
sidebar_position: 7
---

# Use icons

:::info[Info]
Most React icon libraries support this format. Check, for example,
[react-icons](https://www.npmjs.com/package/react-icons),
[phosphor-icons](https://github.com/phosphor-icons/react),
[heroicons](https://heroicons.com/) etc.
:::

Koval UI supports of external icons. When some component in the library exposes `icon` (`prefixIcon`, `suffixIcon`) it expects a React component which is compatible with `SVGProps<SVGSVGElement>` type. SVG CSS style has to support [currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword) keyword.

## Prefix and suffix icons

[Button](https://morewings.github.io/koval-ui/?path=/docs/components-button--docs) and [various input components](https://koval.support/inputs/inputs) support `prefix` and `suffix` props, which can be used to extend your component with icon.

## `Button` with prefix and suffix icons

```jsx live
//import {AlienIcon, FlyingSaucerIcon} from '@phosphor-icons/react';

function Example(props) {
  return (
    <div>
      <Button prefix={AlienIcon} suffix={FlyingSaucerIcon}>
        Hello, World!
      </Button>
    </div>
  );
}
```

## `InputText` with prefix icon

```jsx live
//import {AlienIcon} from '@phosphor-icons/react';

function Example(props) {
  return (
    <div>
      <InputText prefix={AlienIcon} placeholder="Hello, World!" />
    </div>
  );
}
```
