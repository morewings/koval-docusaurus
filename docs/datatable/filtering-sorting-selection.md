---
sidebar_position: 4
---

# Filtering, Sorting, and Selection

The `DataTable` provides robust capabilities for interacting with your data, including column-based filtering, sorting, and row selection.

## Sorting

To enable sorting on a specific column, set the `sortable` property to `true` in its configuration. By default, the table attempts to automatically guess the best sorting strategy. You can explicitly set a built-in strategy using `sortingFn`, or provide a custom sorting function.

:::note

Multi-column sorting is currently disabled. Only single-column sorting is supported.

:::

### Built-in Sorting Modes

The `sortingFn` property accepts any of these built-in mode names:

| Mode                        | Description                                 |
| --------------------------- | ------------------------------------------- |
| `auto`                      | Automatically detect the best strategy      |
| `alphanumeric`              | Case-insensitive alphanumeric sort          |
| `alphanumericCaseSensitive` | Case-sensitive alphanumeric sort            |
| `text`                      | Case-insensitive text sort                  |
| `textCaseSensitive`         | Case-sensitive text sort                    |
| `datetime`                  | Sort by date/time values                    |
| `basic`                     | Basic comparison (greater than / less than) |

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

To allow users to filter a column, set the `filterable` property to `true`. You can configure how the filter matches values using `filterFn`.

### Built-in Filter Modes

The `filterFn` property accepts any of these built-in mode names:

| Mode                      | Description                            |
| ------------------------- | -------------------------------------- |
| `auto`                    | Automatically detect the best strategy |
| `includesString`          | Case-insensitive substring match       |
| `includesStringSensitive` | Case-sensitive substring match         |
| `equalsString`            | Exact string equality                  |
| `arrIncludes`             | Array includes the filter value        |
| `arrIncludesAll`          | Array includes all filter values       |
| `arrIncludesSome`         | Array includes some filter values      |
| `equals`                  | Strict equality (`===`)                |
| `weakEquals`              | Weak equality (`Object.is`)            |
| `inNumberRange`           | Value falls within a numeric range     |

### Custom Filter Functions

The DataTable ships with two built-in custom filter functions registered under the `CustomFilterFns` enum:

- **`isInDateRange`** — Filters date columns by a `[from, to]` date range. The filter value is resolved as two `Date` objects.
- **`isInPercentRange`** — Filters percentage columns by a `[from, to]` numeric range. Cell values (stored as decimals, e.g., `0.42`) are multiplied by 100 before comparison.

```tsx
import type {Column, CustomFilterFns} from 'koval-ui';

const columns: Column[] = [
  {
    id: 'createdAt',
    name: 'Created',
    accessorKey: 'createdAt',
    columnType: 'date',
    filterable: true,
    filterFn: CustomFilterFns.isInDateRange,
  },
  {
    id: 'growth',
    name: 'Growth',
    accessorKey: 'growth',
    columnType: 'percentage',
    filterable: true,
    filterFn: CustomFilterFns.isInPercentRange,
  },
];
```

You can also write your own custom filter function. A custom `filterFn` is passed the row, the column ID, and the current filter value.

### Empty State

When active filters produce zero matching rows, the table displays a "No data to render" message with a **Reset all filters** button. Clicking it clears all active filters and restores the full dataset.

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
  const data = useMemo(() => generateData(3, 42), []);
  const [selection, setSelection] = React.useState({});

  const columns = useMemo(
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
