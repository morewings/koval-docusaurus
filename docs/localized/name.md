---
sidebar_position: 4
---

# Name formatters

Koval UI exposes a series name formatter component which can display various names (regions, countries, currencies, and units).

## `NameLanguage`

Displays localized language name, based on the provided a [two-letter ISO 639-1 code](https://www.iso.org/iso-639-language-code).

### Demo

```jsx live
//import {NameLanguage} from 'koval-ui';

function Example(props) {
  return <NameLanguage languageCode="sa" locale="uk-UA" />;
}
```

## `NameRegion`

Displays a localized region name, based on the provided [ISO 3166 two-letter code](https://www.iso.org/iso-3166-country-codes.html).

### Demo

```jsx live
//import {NameRegion} from 'koval-ui';

function Example(props) {
  // Will display country name in Standard Moroccan Tamazight locale
  return <NameRegion countryCode="SE" locale="zgh-Tfng-MA" />;
}
```

## `NameCurrency`

Displays localized currency name, based on the provided a [three-letter ISO 4217 code](https://www.iso.org/iso-4217-currency-codes.html).

### Demo

```jsx live
//import {NameCurrency} from 'koval-ui';

function Example(props) {
  return <NameCurrency currencyCode="CAD" locale="ga-IE" />;
}
```

## `NameTime`

Displays localized time period name. `era`, `year`, `quarter`, `month`, `weekOfYear`, `weekday`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `timeZoneName` are supported.

### Demo

```jsx live
//import {NameTime} from 'koval-ui';

function Example(props) {
  return <NameTime timePeriod="era" locale="en-US" />;
}
```
