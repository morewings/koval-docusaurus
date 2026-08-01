---
sidebar_position: 5
---

# Actions: Mass Edit and Delete

The `DataTable` has built-in mass-action support out of the box. When you configure the table to be `selectable={true}`, selecting one or more rows will reveal a contextual action bar at the top of the table.

## Bulk Row Operations

From this action bar, users can perform standard operations against all currently selected rows:

1. **Clear Selection**: Deselects all rows.
2. **Delete Row(s)**: Opens a confirmation dialog and deletes the selected rows from the table data.
3. **Edit Row(s)**: Opens a dialog where users can select a specific column and provide a new value. This value will be applied to all currently selected rows.

### Usage

To enable this functionality, provide the `selectable` property and implement the `onEdit` callback. The `onEdit` callback receives an `EditState` object which tells you exactly which row indices were modified and their new data payloads. It is triggered after an edit or delete operation is confirmed.

```jsx live noInline
// import { DataTable } from 'koval-ui';

const data = generateData(100, 42);

const columns = [
  {id: 'firstName', name: 'First Name', accessorKey: 'firstName', editable: true},
  {id: 'role', name: 'Role', accessorKey: 'role', editable: true},
  {id: 'lastName', name: 'Last Name', accessorKey: 'firstName'},
  {id: 'country', name: 'Country', accessorKey: 'address.country'},
];

function Example() {
  const handleEdit = useCallback(editState => {
    // Note: When `processingMode="internal"`, the table automatically mutates its data visually.
    // If you are using external processing, you need to apply these edits to your own state/backend.
    console.log('Edit state changed:', editState);
  }, []);

  return (
    <DataTable
      tableData={data}
      columns={columns}
      selectable={true}
      onEdit={handleEdit}
      tableHeight={400}
    />
  );
}

render(<Example />);
```

### Column configuration for editing

In order for a column to appear in the "Edit Row(s)" dialog dropdown, its column configuration must have `editable: true`. By default, the type of input rendered in the edit dialog will match the column's `columnType`.

```tsx
const columns = [
  {
    id: 'score',
    name: 'Score',
    accessorKey: 'score',
    columnType: 'decimal',
    editable: true, // Allows mass-editing this field with a number input
  },
];
```
