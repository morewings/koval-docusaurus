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
    <span style={{
      background: value === 'manager' ? '#e3f2fd' : '#f0f4c3',
      color: value === 'manager' ? '#1565c0' : '#827717',
      padding: '4px 8px',
      borderRadius: '4px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: '0.8rem'
    }}>
      {value}
    </span>
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
