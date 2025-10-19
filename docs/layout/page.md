# Page layout

Page layout provides utility components to organize arbitrary web page sections: `Header`, `Main`, `Sidebar` and `Footer`.

:::info[Info]
More examples of `Layout` are available at [Koval UI
Storybook](https://morewings.github.io/koval-ui/?path=/docs/layout-page--docs).
:::

## Code example

```tsx
import {Page, Header, Content, Main, Footer} from 'koval-ui';

<Page width="fluid">
  <Header>Header content</Header>
  <Content>
    <Sidebar xs={3}>Sidebar content</Sidebar>
    <Main>Main content</Main>
  </Content>
  <Footer>Footer content</Footer>
</Page>;
```

## Page layout anatomy

<iframe
src="https://morewings.github.io/koval-ui/iframe.html?args=children:withLeftSidebar&globals=&id=layout-page--primary&viewMode=story"
width={777}
height={666}
/>

## Page component

:::info[Info]
See [all Page
props](https://morewings.github.io/koval-ui/?path=/docs/layout-page--docs#page-props).
:::

`Page` component serves as a container and works the same as [Grid](/docs/layout/grid#grid) component.

## Header

:::info[Info]
See [all Header
props](https://morewings.github.io/koval-ui/?path=/docs/layout-page--docs#header-props).
:::

`Header` component can be made **sticky** using the corresponding prop.

### Sticky header demo

<iframe
src="https://morewings.github.io/koval-ui/iframe.html?args=children:withStickyHeader&globals=&id=layout-page--primary&viewMode=story"
width={777}
height={666}
/>

### Content

`Content` wraps page content and sidebar. Works the same as [Row](/docs/layout/grid#row) component.
