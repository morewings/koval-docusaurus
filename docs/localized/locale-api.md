---
sidebar_position: 1
---

# Locale API

Koval formatter components support `locale` prop, which allows setting formatting according to user country standards.

This property accepts a string with a [BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag), or an [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) instance,
or an array of such locale identifiers.

`locale` prop defaults to browser settings.

## Examples

Sweden country name in different locales.

```jsx live
//import {NameRegion} from 'koval-ui';

function Example(props) {
  // Will display country name in Standard Moroccan Tamazight locale
  return (
    <div>
      <NameRegion countryCode="SE" locale="en-US" /> <br />
      <NameRegion countryCode="SE" locale="zgh-Tfng-MA" /> <br />
      <NameRegion countryCode="SE" locale="ga-IE" /> <br />
      <NameRegion countryCode="SE" locale="ka-GE" /> <br />
      <NameRegion countryCode="SE" locale="is-IS" /> <br />
      <NameRegion countryCode="SE" locale="uk-UA" /> <br />
    </div>
  );
}
```
