---
sidebar_position: 7
---

# Datatable modes

The `DataTable` supports different ways of rendering rows (`renderMode`) and processing data operations like sorting/filtering (`processingMode`).

## Render: Virtual

The `virtual` rendering mode (`renderMode="virtual"`) allows the table to efficiently display thousands of rows without crashing the browser. It renders only the rows that are currently visible within the scrolling viewport.

For virtual rendering to work optimally, you usually need to supply a `tableHeight`.

```jsx live
// import { DataTable } from 'koval-ui';

function Example() {
  const data = React.useMemo(() => generateData(1000, 123), []);

  return (
    <DataTable
      selectable={true}
      caption="Virtual Table with 1000 rows"
      tableData={data}
      columns={demoColumns}
      renderMode="virtual"
      tableHeight={555}
    />
  );
}
```

## Render: Paginated

The `paginated` rendering mode (`renderMode="paginated"`) divides your dataset into discrete pages. It adds a pagination control component at the bottom of the table.

```tsx live
// import { DataTable } from 'koval-ui';

function Example() {
  const data = React.useMemo(() => generateData(55, 42), []);
  const pagination = React.useMemo(() => ({pageSize: 10, pageIndex: 0}), []);

  return (
    <DataTable
      caption="Paginated Table"
      tableData={data}
      columns={demoColumns}
      renderMode="paginated"
      pagination={pagination}
      tableHeight={666}
    />
  );
}
```

## Processing Mode: Internal

By default, the table operates with `processingMode="internal"`. In this mode, the table manages its own filtering, sorting, and pagination logic out of the box based on the full array you provide to `tableData`. It is ideal for moderately sized datasets loaded entirely in the browser.

## Processing Mode: External

When dealing with large datasets fetched from an API, use `processingMode="external"`. In this mode, the table suppresses its built-in data mutation logic and acts strictly as a controlled presentation layer. You must handle the `onSortingChange`, `onFiltersChange`, and `onPaginationChange` events, make a network request, and update the `tableData` and `pageCount` yourself.

```tsx
import {DataTable} from 'koval-ui';
import type {PaginationState, SortingState, ColumnFiltersState} from 'koval-ui';

export default function ExternalProcessingExample() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [pagination, setPagination] = useState<PaginationState>({
    pageSize: 10,
    pageIndex: 0,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filters, setFilters] = useState<ColumnFiltersState>([]);

  useEffect(() => {
    // In a real scenario, this would be an API fetch call.
    // e.g., fetch(`/api/data?page=${pagination.pageIndex}&size=${pagination.pageSize}`)
    //         .then(res => res.json()).then(result => { setData(result.items); setPageCount(result.totalPages); })
  }, [pagination, sorting, filters]);

  return (
    <DataTable
      processingMode="external"
      renderMode="paginated"
      tableData={data}
      columns={[]} // your columns
      pageCount={pageCount}
      pagination={pagination}
      onPaginationChange={setPagination}
      sorting={sorting}
      onSortingChange={setSorting}
      columnFilters={filters}
      onFiltersChange={setFilters}
    />
  );
}
```

:::info

See Storybook stories and example code for more complete examples of external logic application.

- Virtual: [story](https://morewings.github.io/koval-ui/?path=/story/components-datatable--virtual-controlled), [code](https://github.com/morewings/koval-ui/blob/master/src/lib/DataTable/DataTable.stories.tsx#L275)

- Paginated: [story](https://morewings.github.io/koval-ui/?path=/story/components-datatable--paginated-controlled), [code](https://github.com/morewings/koval-ui/blob/master/src/lib/DataTable/DataTable.stories.tsx#L419)

:::
