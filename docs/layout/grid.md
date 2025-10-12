# Grid layout

Koval provides support for a responsive grid layout through its `Grid`, `Row`, and `Column` components.

:::info[Info]
For detailed examples, refer to the [Storybook
documentation](https://morewings.github.io/koval-ui/?path=/docs/layout-grid--docs).
:::

Koval layout is designed to be fully responsive, ensuring that your content looks great on all devices, from mobile phones to large desktop screens.

## Grid

:::info[Info]
See [all Grid props](https://morewings.github.io/koval-ui/?path=/docs/layout-grid--docs#grid-props).
:::

`Grid` component serves as a wrapper. The grid **width** can be specified as a `number` or as `fluid` string, which sets the width to 100%.

### Fixed size grid

:::warning[Warning]
Layout examples may display wrong at small screens.
:::

Developer can set exact `Grid` width in pixels.

```jsx live
//import {Grid, Row, Col} from 'koval-ui';
// Cell is a custom wrapper component
//import {Cell} from 'your/components';

function Example(props) {
  return (
    <Grid width={666}>
      <Row>
        <Col xs={4}>
          <Cell>With</Cell>
        </Col>
        <Col xs={4}>
          <Cell>defined</Cell>
        </Col>
        <Col xs={4}>
          <Cell>width: 666px</Cell>
        </Col>
      </Row>
    </Grid>
  );
}
```

### Fluid size grid

Fluid setting makes the grid take all available space.

```jsx live
function Example(props) {
  return (
    <Grid width="fluid">
      <Row>
        <Col xs={4}>
          <Cell>Takes</Cell>
        </Col>
        <Col xs={4}>
          <Cell>full</Cell>
        </Col>
        <Col xs={4}>
          <Cell>width</Cell>
        </Col>
      </Row>
    </Grid>
  );
}
```

### Define column number number (aka grid base)

Developers can define the **number of columns** using the `base` prop, with recommended values being 12, 16, or 24. 

```jsx live
function Example(props) {
  return (
    [
      (
        <Grid width={666} base={12}>
          <Row>
            <Col xs={4}>
              <Cell>Cell size: 4</Cell>
            </Col>
            <Col xs={4}>
              <Cell>Cell size: 4</Cell>
            </Col>
            <Col xs={4}>
              <Cell>Cell size: 4</Cell>
            </Col>
          </Row>
        </Grid>
      ),
      (
        <Grid width={666} base={24}>
          <Row>
            <Col xs={4}>
              <Cell>Cell size: 4</Cell>
            </Col>
            <Col xs={4}>
              <Cell>Cell size: 4</Cell>
            </Col>
            <Col xs={4}>
              <Cell>Cell size: 4</Cell>
            </Col>
            <Col xs={4}>
              <Cell>Cell size: 4</Cell>
            </Col>
            <Col xs={4}>
              <Cell>Cell size: 4</Cell>
            </Col>
            <Col xs={4}>
              <Cell>Cell size: 4</Cell>
            </Col>
          </Row>
        </Grid>
      ),
    ]
  );
}
```

### Set gap

The `gap` prop allows control over the width between columns.

```jsx live
function Example(props) {
  return (
    [
      (
        <Grid width={666} gap={12}>
          <Row>
            <Col xs={4}>
              <Cell>Cell</Cell>
            </Col>
            <Col xs={4}>
              <Cell>Cell</Cell>
            </Col>
            <Col xs={4}>
              <Cell>Cell</Cell>
            </Col>
          </Row>
        </Grid>
      ),
      (
        <Grid width={666} gap={24}>
          <Row>
            <Col xs={4}>
              <Cell>Cell</Cell>
            </Col>
            <Col xs={4}>
              <Cell>Cell</Cell>
            </Col>
            <Col xs={4}>
              <Cell>Cell</Cell>
            </Col>
          </Row>
        </Grid>
      ),
    ]
  );
}
```

## Row

:::info[Info]
See [all Row props](https://morewings.github.io/koval-ui/?path=/docs/layout-grid--docs#row-props).
:::

`Row` component creates horizontal section for rendering the line of content.

## Col

`Col` component creates grid column. Developers can configure **width** and **shift** of the column.

### Responsiveness 

By using predefined breakpoints and t-shirt sizes (`xs`, `sm`, `md`, `lg`, `xl`), the grid layout ensures a consistent look and feel across different screen sizes. Each of them is available as a prop which accepts number of columns.

```jsx live
function Example(props) {
  return (
    <Grid width={666}>
      <Row>
        <Col xs={4} lg={6}>
          <Cell>x-small screens: 4; large: 2</Cell>
        </Col>
        <Col sm={3} md={5}>
          <Cell>small screens: 3; medium: 5</Cell>
        </Col>
        <Col xs={1}>
          <Cell>all: 1</Cell>
        </Col>
      </Row>
    </Grid>
  );
}
```

### Fluid columns

All breakpoint props accept `fluid`, which indicates that column takes **all available width**.

```jsx live
function Example(props) {
  return (
    <Grid width={666}>
      <Row>
        <Col xs="fluid">
          <Cell>Takes the resof of width</Cell>
        </Col>
        <Col xs={4}>
          <Cell>Takes 4 columns</Cell>
        </Col>
      </Row>
    </Grid>
  );
}
```

### Offset column

Developers can also shift column towards right side, using same breakpoints via `shiftXX` prop.

```jsx live
function Example(props) {
  return (
    <Grid width={666}>
      <Row>
        <Col xs={6} shiftXS={3}>
          <Cell>6 columns centered</Cell>
        </Col>
      </Row>
    </Grid>
  );
}
```


## Breakpoint values

Breakpoints are applied from smallest to biggest, so the biggest one has the preference.

| Name |      Value      |                      Description                       |
| :--- | :-------------: | :----------------------------------------------------: |
| XS   | width >= 320px  |           Tiny screens (e.g., mobile phones)           |
| SM   | width >= 768px  |             Small screens (e.g., tablets)              |
| MD   | width >= 1024px |     Medium screens (e.g., tablets, small laptops)      |
| LG   | width >= 1440px |             Large screens (e.g., desktops)             |
| XL   | width >= 1920px | Extra large screens (e.g., large desktops, TV screens) |

