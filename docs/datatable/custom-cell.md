---
sidebar_position: 8
---

# Custom data types and cell renderers

If the built-in column types aren't enough for your use case, you can provide a custom React component for your cells, headers, footers, or filter inputs.

## Custom Cell Component

To render custom JSX in a table cell, define a `columnCell` component in your column configuration. It receives the `cellContext` (from `@tanstack/react-table`) and the current cell `value`.

```jsx live noInline
// import { DataTable } from 'koval-ui';

// Example custom cell renderer
function CustomBadgeCell({ value }) {
  return (
    <div style={{padding: 6}}>
      <div style={{
        background: value === 'manager' ? '#e3f2fd' : '#f0f4c3',
        color: value === 'manager' ? '#1565c0' : '#827717',
        padding: '6px 12px',
        borderRadius: '4px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '0.8rem',
      }}>
        {value}
      </div>
    </div>

  );
}

function CustomCellExample() {
  const data = React.useMemo(() => generateData(5, 777), []);

  const columns = React.useMemo<Column[]>(() => [
    {
      id: 'firstName',
      name: 'First Name',
      accessorKey: 'firstName'
    },
    {
      id: 'lastName',
      name: 'Last Name',
      accessorKey: 'lastName'
    },
    {
      id: 'role',
      name: 'Role',
      accessorKey: 'role',
      columnCell: CustomBadgeCell // Providing the custom component
    }
  ], []);

  return (
    <DataTable
      tableData={data}
      columns={columns}
      tableHeight={333}
    />
  );
}

render(
  <CustomCellExample />
);
```

## Advanced Cell Overrides

Similarly, you can override how the column header, column footer, and the filter input render.

```tsx
import type {Column} from 'koval-ui';
import {Select} from 'koval-ui';

const customColumns: Column[] = [
  {
    id: 'status',
    name: 'Status',
    accessorKey: 'status',
    headerCell: ({title}) => <strong>{title} 🚀</strong>,
    filterInput: ({value, onChange}) => (
      <Select value={value as string} onChange={e => onChange(e.target.value)}>
        <option value="">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </Select>
    ),
  },
];
```

### Localized Country & Flag with Custom Filter

Here is a more comprehensive example that demonstrates how to render a localized country name using the Koval UI [NameRegion](/docs/localized/name#nameregion) alongside the [Flag](/docs/localized/flag) component. We also override the column's filter input to render a `Select` instead of the default text input.

```jsx live noInline
// import { DataTable, Flag, Select, NameRegion } from 'koval-ui';

// Custom cell to render a flag and localized country name
function CountryCell({value, cellContext}) {
  // Get table locale from context
  const locale = cellContext.table.options.meta.locale;
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '8px', padding: 6}}>
      <Flag countryCode={value} size={24} />
      <span>
        <NameRegion countryCode={value} locale={locale} />
      </span>
    </div>
  );
}

// Custom filter using a native select for demonstration
function CountryFilter({value, onChange}) {
  return (
    <FormField label="Select country:">
      <Select value={value} onChange={e => onChange(e.target.value)}>
        <option value="">All</option>
        <option value="US">United States</option>
        <option value="GB">United Kingdom</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
        <option value="JP">Japan</option>
      </Select>
    </FormField>
  );
}

const tableData = [
  {id: 1, name: 'Alice Smith', country: 'US'},
  {id: 2, name: 'Bob Jones', country: 'GB'},
  {id: 3, name: 'Charlie Brown', country: 'FR'},
  {id: 4, name: 'Diana Prince', country: 'DE'},
  {id: 5, name: 'Evan Wright', country: 'JP'},
  {id: 6, name: 'Fiona Gallagher', country: 'CA'},
];

const tableColumns = [
  {
    id: 'name',
    name: 'Name',
    accessorKey: 'name',
  },
  {
    id: 'country',
    name: 'Country',
    accessorKey: 'country',
    columnCell: CountryCell,
    filterInput: CountryFilter,
    size: 222,
  },
];

function AdvancedCustomCellExample() {
  const [locale, setLocale] = useState('zgh-Tfng-MA');
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
      <DataTable
        locale={locale}
        tableData={tableData}
        columns={tableColumns}
        tableHeight={366}
        enableFilters={true}
      />
    </div>
  );
}

render(<AdvancedCustomCellExample />);
```
