---
sidebar_position: 2
title: Provide data and configure columns
---

# Table Setup

To use the `DataTable`, provide it with an array of objects (`tableData`) and an array of column definitions (`columns`).

## Basic Example

:::warning

`DataTable` rerender is a resource-consuming operation. To provide the best UX, maintain referential equality for component props.
I.e. wrap objects with `useMemo` and functions with `useCallback`.

:::

```jsx live
// import { DataTable } from 'koval-ui';

function Example() {
  const columns = useMemo(
    () => [
      {
        id: 'firstName',
        name: 'First Name',
        accessorKey: 'firstName',
      },
      {
        id: 'lastName',
        name: 'Last Name',
        accessorKey: 'lastName',
      },
      {
        id: 'role',
        name: 'Role',
        accessorKey: 'role',
      },
      {
        id: 'company',
        name: 'Company',
        accessorKey: 'business.companyName', // access nested data
      },
      {
        id: 'country',
        name: 'Country',
        accessorKey: 'address.country',
      },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        firstName: 'Sidoney',
        lastName: 'Koss',
        role: 'manager',
        address: {
          city: 'New Johnathonshire',
          country: 'Tokelau',
        },
        business: {
          companyName: 'King LLC',
        },
      },
      {
        firstName: 'Elysia',
        lastName: 'Anderson',
        role: 'developer',
        address: {
          city: 'West Adelehaven',
          country: 'Gabon',
        },
        business: {
          companyName: 'Borer Group',
        },
      },
      {
        firstName: 'Celia',
        lastName: 'MacGyver',
        role: 'developer',
        address: {
          city: 'Dallinberg',
          country: 'Chad',
        },
        business: {
          companyName: 'Lind, Kirlin and Kuhic',
        },
      },
    ],
    []
  );

  return (
    <DataTable
      caption="Most Basic Table"
      tableData={data}
      columns={columns}
      tableHeight={300}
    />
  );
}
```

## Configuring Columns

Columns map your data's properties to the table display. They must have an `id`, a `name` for the table header, and either an `accessorKey` or an `accessorFn` to resolve the data.

```jsx
const columns = [
  {
    id: 'firstName',
    name: 'First Name',
    accessorKey: 'firstName',
    sortable: true,
    filterable: true,
  },
  {
    id: 'age',
    name: 'Age',
    accessorKey: 'age',
    columnType: 'decimal',
    sortable: true,
  },
  {
    id: 'country',
    name: 'Country',
    accessorKey: 'address.country', // access nested data
  },
];
```

## `Column` Interface

Each object in the `columns` array configures a column in the table.

### `id`

type: `string`

Unique identifier for the column.

### `name`

type: `string`

Human-readable title for the column header.

### `accessorKey`

type: `string`

Object path to access the value in `TableData` (e.g. `'user.name'`).

### `accessorFn`

type: `AccessorFn`

Function to dynamically compute the value from the row data.

### `columnType`

type: `ColumnTypes`

Specifies data formatting (e.g. `'text'`, `'decimal'`, `'percentage'`, `'currency'`, `'unit'`, `'date'`, `'select'`).

### `columnCell`

type: `CellComponent`

Custom React component to render the cell.

### `size`

type: `number`

Column width in pixels. Default is `166`.

### `editable`

type: `boolean`

Allows user editing of the column cells.

### `filterable`

type: `boolean`

Enables filtering on this column.

### `sortable`

type: `boolean`

Enables ascending/descending sorting.

### `pinnable`

type: `boolean`

Enables freezing the column to the left/right.

### `sortingFn`

type: `SortingModes | SortingFn`

Mode or function for sorting data in this column.

### `filterFn`

type: `FilterFnOption | CustomFilterFns`

Mode or function for filtering data in this column.

### `cellProps`

type: `ColumnFormatOptions`

Props passed to formatting cells (e.g., date formats, currencies).

### `headerCell`

type: `HeaderCell`

Custom React component for the column header.

### `footerCell`

type: `FooterCell`

Custom React component for the column footer.

### `filterInput`

type: `FilterInput`

Custom React component for the column filter input.
