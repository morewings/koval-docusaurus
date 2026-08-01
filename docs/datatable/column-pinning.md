---
sidebar_position: 6
---

# Column Pinning

The `DataTable` supports column pinning (also known as frozen columns). This allows you to stick specific columns to the left or right side of the table so they remain visible while the user scrolls horizontally through a wide dataset.

## Defining Pinnable Columns

First, ensure that the columns you want to freeze have the `pinnable` property set to `true` (by default, columns are pinnable unless explicitly set to `false`).

## Controlling Pinning State

The pinning state is controlled via the `columnPinning` prop passed directly to the `<DataTable />` component. This prop accepts an object with `left` and `right` arrays containing the string `id`s of the columns you wish to pin.

:::note

If you have `selectable={true}` enabled, the row selection checkbox column is automatically pinned to the far left.
:::

```jsx live noInline
// import { DataTable } from 'koval-ui';

const data = generateData(10, 42);
const columns = [
  {id: 'firstName', name: 'firstName', accessorKey: 'firstName', size: 150},
  {id: 'lastName', name: 'lastName', accessorKey: 'lastName', size: 150},
  {
    id: 'companyName',
    name: 'companyName',
    accessorKey: 'business.companyName',
    size: 300,
  },
  {id: 'country', name: 'country', accessorKey: 'address.country', size: 250},
  {id: 'city', name: 'city', accessorKey: 'address.city', size: 150},
  {id: 'role', name: 'role', accessorKey: 'role', size: 150},
];

// Pin 'firstName' and 'lastName' to the left, and 'role' to the right.
const pinningState = {
  left: ['firstName', 'lastName'],
  right: ['role'],
};

function Example() {
  return (
    <DataTable
      tableData={data}
      columns={columns}
      columnPinning={pinningState}
      tableHeight={300}
    />
  );
}

render(<Example />);
```
