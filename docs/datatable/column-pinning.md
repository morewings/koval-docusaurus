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

```jsx live
// import { DataTable } from 'koval-ui';

function Example() {
  const data = React.useMemo(() => generateData(10, 42), []);

  const columns = React.useMemo(
    () => [
      {id: 'firstName', name: 'First Name', accessorKey: 'firstName', size: 200},
      {id: 'lastName', name: 'Last Name', accessorKey: 'lastName', size: 200},
      {
        id: 'companyName',
        name: 'Company',
        accessorKey: 'business.companyName',
        size: 300,
      },
      {id: 'age', name: 'Age', accessorKey: 'age', size: 150},
      {id: 'country', name: 'Country', accessorKey: 'address.country', size: 250},
      {id: 'role', name: 'Role', accessorKey: 'role', size: 200},
    ],
    []
  );

  // Pin 'firstName' and 'lastName' to the left, and 'role' to the right.
  const pinningState = {
    left: ['firstName', 'lastName'],
    right: ['role'],
  };

  return (
    <DataTable
      tableData={data}
      columns={columns}
      columnPinning={pinningState}
      tableHeight={300}
    />
  );
}
```
