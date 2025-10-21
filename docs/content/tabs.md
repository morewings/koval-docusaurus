---
sidebar_position: 1
---

# Tabs

`Tabs` is a navigational component that allows users to switch between different views or sections of content within the same page. It organizes content into multiple panels, each associated with a tab, and only one panel is visible at a time.

## Demo

```jsx live
//import {FlyingSaucerIcon} from '@phosphor-icons/react';
//import {Tabs, Tab, Figure, Picture} from 'koval-ui';

function Example(props) {
  return (
    <Tabs width={700} height={366} selected="bar">
      <Tab name="foo" icon={FlyingSaucerIcon}>
        Khvylʹovyy represents a cornerstone of Kyiv's vibrant nightlife, nestled in the
        historic Podil district. This venue provides a unique atmosphere where signature
        cocktails and craft beverages are served. By day, it's a hub for creative minds
        and casual meetings, transforming as evening approaches.
      </Tab>
      <Tab name="bar">
        <Figure>
          <Picture width={666} height={333} src="https://picsum.photos/666/333" />
        </Figure>
      </Tab>
      <Tab name="bazz">
        The space frequently hosts diverse events, from electronic music sets and live DJ
        performances to cultural gatherings and local markets. It stands as a popular
        destination for both residents and visitors seeking an authentic Kyiv bar
        experience.
      </Tab>
    </Tabs>
  );
}
```

## Component API

There two components responsible for this functionality:

- `Tabs` - wrapper component.
- `Tab` - container for each content portion.

### `Tabs` props

#### children

type: `ReactElement<TabProps> | Array<ReactElement<TabProps>>`

`Tabs` children is restricted to single or multiple `Tab` components only

#### `selected`

type: `string`

Set a pre-selected Tab name

#### `width`

type: `number`

Define common width for all portions

#### `height`

type: `number`

Define common height for all portions

#### `onToggle`

type: `(tabName: string) => void;`

Callback when a user selects different `Tab`

### `Tab` props

#### `name`

type: `string` required

Set a unique name for the Tab

#### `icon`

type: `FC<HTMLAttributes<HTMLOrSVGElement> & unknown>` required

Provide an icon to display near `Tab` name

See [Icons API page](/docs/icons)
