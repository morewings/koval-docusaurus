---
sidebar_position: 3
---

# Locales and formats

The `DataTable` supports [Locale API](/docs/localized/locale-api) via the underlying field components.

## Working with locales

You can pass a `locale` prop to the `DataTable`. This locale string (e.g., `'en-US'`, `'de-DE'`) cascades down to all cells and overrides the browser's default locale. Dates, times, numbers, and currencies will be automatically formatted according to the specified region.

```tsx live
// import { DataTable } from 'koval-ui';

function Example() {
  const data = React.useMemo(() => generateData(3, 123), []);
  const [locale, setLocale] = React.useState('de-DE');

  const columns = React.useMemo(
    () => [
      {
        id: 'randomDecimal',
        sortingFn: 'basic',
        accessorKey: 'randomDecimal',
        columnType: 'decimal',
        name: 'Decimal',
        size: 222,
      },
      {
        id: 'moneyExample',
        sortingFn: 'basic',
        accessorKey: 'moneyExample',
        columnType: 'currency',
        name: 'Currency format',
        size: 222,
        cellProps: {
          digitsConfig: {
            fraction: {
              maximum: 2,
              minimum: 2,
            },
          },
        },
      },
      {
        id: 'unitExample',
        sortingFn: 'basic',
        accessorKey: 'unitExample',
        columnType: 'unit',
        name: 'Unit',
        size: 222,
        cellProps: {
          unit: 'gallon',
          unitDisplay: 'short',
        },
      },
      {
        id: 'dateExample',
        sortingFn: 'basic',
        accessorKey: 'dateExample',
        columnType: 'date',
        name: 'Random date',
        size: 222,
        cellProps: {
          year: 'numeric',
          weekday: 'short',
          day: '2-digit',
          month: 'short',
        },
      },
    ],
    []
  );

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
      <Select value={locale} onChange={e => setLocale(e.target.value)}>
        <option value="en-US">Enlish/US</option>
        <option value="de-DE">German</option>
        <option value="ja-JP">Japan</option>
        <option value="ka-GE">Georgian</option>
        <option value="uk-UA">Ukrainian</option>
        <option value="zgh-Tfng-MA">Tamazight</option>
      </Select>

      <DataTable tableData={data} columns={columns} locale={locale} tableHeight={222} />
    </div>
  );
}
```

## Formatting numbers, dates, and currencies

To format a specific column, specify its `columnType` (e.g., `'decimal'`, `'percentage'`, `'currency'`, `'unit'`, `'date'`) and pass formatting configuration through the `cellProps` property. See config examples in [relevant Locale API Docs](/docs/category/locale-aware-formatting).

```tsx
import type {Column} from '../types.ts';

const columns: Column[] = [
  {
    id: 'money',
    name: 'Balance',
    accessorKey: 'balance',
    columnType: 'currency',
    cellProps: {
      currency: 'EUR', // Formats as Euro
      digitsConfig: {
        fraction: {maximum: 2, minimum: 2},
      },
    },
  },
  {
    id: 'percent',
    name: 'Growth',
    accessorKey: 'growth',
    columnType: 'percentage',
    cellProps: {
      digitsConfig: {
        fraction: {maximum: 1},
      },
    },
  },
  {
    id: 'date',
    name: 'Created At',
    accessorKey: 'createdAt',
    columnType: 'date',
    cellProps: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  },
];
```
