---
sidebar_position: 3
---

# Card

`Card` renders a styled block of information with optional action buttons at the bottom.

## Demo

```jsx live
//import {Card, H2, P} from 'koval-ui';

function Example(props) {
  const handleActionClick = useCallback(() => {
    console.log('click!');
  });
  const actions = useMemo(
    () => [
      {title: 'Default Action', onClick: handleActionClick},
      {title: 'With Icon', icon: FlyingSaucerIcon, onClick: handleActionClick},
      {title: 'Link Action', type: 'link', onClick: handleActionClick},
      [
        {title: 'Danger Action', type: 'danger', onClick: handleActionClick},
        {title: 'Success Action', type: 'success', onClick: handleActionClick},
      ],
    ],
    [handleActionClick]
  );
  return (
    <div style={{width: 555}}>
      <Card actions={actions} headerImageUrl="https://picsum.photos/999/333">
        <H2>This is card header</H2>
        <P>
          Situated in the energetic Podil district, the bar's interior design strikes a
          careful balance between modern chic and welcoming comfort.
        </P>
        <P>
          The space is crafted to be a versatile social hub, drawing in a diverse and
          creative clientele. Whether settling in for a quiet afternoon drink or joining
          the vibrant energy of a busy night, the atmosphere adapts.
        </P>
      </Card>
    </div>
  );
}
```

## Props

### `layout`

type: `'vertical' | 'horizontal'`

Set a `vertical` or `horizontal` layout for the Card

### `width`

type: `number`

Provide width of the card. Applied in `vertical` mode

### `height`

type: `number`

Provide height of the card. Applied in `horizontal` mode

### `headerImageUrl`

type: `string`

Provide an url for header image

## Use actions

Card supports [Actions API](/docs/floating/actions).
