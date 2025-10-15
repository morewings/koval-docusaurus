# Flag component

`Flag` component uses [ISO 3166 two-letter code](https://www.iso.org/iso-3166-country-codes.html) to render corresponding country symbol. Component also supports `size` prop which allows accepts number in pixels.

## Demo

```jsx live
//import {Flag} from 'koval-ui';

function Example(props) {
  return <Flag countryCode="DE" size={66} />;
}
```
