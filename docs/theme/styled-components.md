---
sidebar_position: 3
---

# 🧩 styled-components integration

All Koval UI components support `className` property, and thus are compatible with **styled-components**, **Emotion CSS** or any similar styling library using this interface.

```js
import {styled} from 'styled-components';
import {P} from 'koval-ui';

const StyledParagraph = styled(P)`
  color: pink;
`;
```

:::tip

This feature works best with [Typography](/docs/category/typography) and other basic components. It's not very capable with complex components.

:::

