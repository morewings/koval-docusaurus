# Prefix and suffix icons

[Button](https://morewings.github.io/koval-ui/?path=/docs/components-button--docs) and [various input components](https://koval.support/inputs/inputs) support `prefix` and `suffix` props, which can be used to extend your component with icon.

Koval UI expects prefix React component which is compatible with `SVGProps<SVGSVGElement>` type.
SVG style has to support [currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword) keyword.

:::info[Info]

Most React icon libraries support this format. Check for example:
[react-icons](https://www.npmjs.com/package/react-icons),
[phosphor-icons](https://github.com/phosphor-icons/react),
[heroicons](https://heroicons.com/) etc.

:::

## `Button` with prefix and suffix icons

```jsx live
//import {AlienIcon, FlyingSaucerIcon} from '@phosphor-icons/react';

function Example(props) {
  return (
    <div>
      <Button prefix={AlienIcon} suffix={FlyingSaucerIcon}>Hello, World!</Button>
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
      <InputText
        prefix={AlienIcon}
        placeholder="Hello, World!" />
    </div>
  );
}
```