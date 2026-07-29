---
sidebar_position: 4
---

# Filtering, Sorting, and Selection

The `DataTable` provides robust capabilities for interacting with your data, including column-based filtering, sorting, and row selection.

## Sorting

To enable sorting on a specific column, set the `sortable` property to `true` in its configuration. By default, the table attempts to automatically guess the best sorting strategy. You can explicitly set a built-in strategy using `sortingFn` (e.g., `'text'`, `'basic'`, `'datetime'`), or provide a custom sorting function.

```jsx
const columns = [
  {
    id: 'name',
    name: 'Name',
    accessorKey: 'name',
    sortable: true,
    sortingFn: 'text', // explicit built-in sorting
  },
  {
    id: 'score',
    name: 'Score',
    accessorKey: 'score',
    sortable: true,
    // Custom sorting function
    sortingFn: (rowA, rowB, columnId) => {
      const a = rowA.getValue(columnId);
      const b = rowB.getValue(columnId);
      // Custom logic: push undefined/null values to bottom
      if (a == null) return 1;
      if (b == null) return -1;
      return a > b ? 1 : a < b ? -1 : 0;
    },
  },
];
```

## Filtering

To allow users to filter a column, set the `filterable` property to `true`. You can configure how the filter matches values using `filterFn` (e.g., `'includesString'`, `'equalsString'`).

You can also write custom filter functions. A custom `filterFn` is passed the row, the column ID, and the current filter value.

```jsx
const columns = [
  {
    id: 'status',
    name: 'Status',
    accessorKey: 'status',
    filterable: true,
    filterFn: 'equalsString', // Requires an exact match
  },
  {
    id: 'tags',
    name: 'Tags',
    accessorKey: 'tags',
    filterable: true,
    // Custom filtering function for an array of tags
    filterFn: (row, columnId, filterValue) => {
      const tags = row.getValue(columnId);
      // Return true if the row should be included
      return tags.some(tag => tag.toLowerCase().includes(filterValue.toLowerCase()));
    },
  },
];
```

## Row Selection

You can add a checkbox column to enable row selection by passing `selectable={true}` to the `<DataTable />` component. You can capture changes in selection by using the `onRowSelect` callback or controlling the selection externally via the `rowSelection` prop.

```jsx live
// import { DataTable } from 'koval-ui';

function Example() {
  const data = React.useMemo(() => generateData(3, 42), []);
  const [selection, setSelection] = React.useState({});

  const columns = React.useMemo(
    () => [
      {id: 'firstName', name: 'First Name', accessorKey: 'firstName'},
      {id: 'lastName', name: 'Last Name', accessorKey: 'firstName'},
      {id: 'role', name: 'Role', accessorKey: 'role'},
      {id: 'country', name: 'Country', accessorKey: 'address.country'},
    ],
    []
  );

  return (
    <div>
      <div style={{marginBottom: 16}}>
        Selected IDs: {Object.keys(selection).join(', ') || 'None'}
      </div>
      <DataTable
        tableData={data}
        columns={columns}
        selectable={true}
        onRowSelect={setSelection}
        tableHeight={300}
      />
    </div>
  );
}
```
