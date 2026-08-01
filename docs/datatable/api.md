---
sidebar_position: 9
---

# API

Below is the complete list of properties for the `DataTable` component.

## `columns`

type: `Column[]` required

Provide table columns configuration.

## `tableData`

type: `TableData` required

Provide data for the table. Array of objects.

## `onEdit`

type: `(editState: EditState) => void`

Callback to capture table data changes from editable cells.

## `columnPinning`

type: `ColumnPinningState`

Control column pinning state externally.

## `pagination`

type: `PaginationState`

Control pagination state externally.

## `onPaginationChange`

type: `(state: PaginationState) => void`

Callback to capture pagination changes.

## `columnFilters`

type: `ColumnFiltersState`

Manage column filters externally.

## `onFiltersChange`

type: `(state: ColumnFiltersState) => void`

Callback to capture column filters changes.

## `rowSelection`

type: `RowSelectionState`

Manage row selection externally.

## `onRowSelect`

type: `(state: RowSelectionState) => void`

Callback to capture row selection changes.

## `selectable`

type: `boolean`

Enable row selection with checkboxes. When `true`, a checkbox column is added and a contextual action bar appears above the table for bulk operations (edit, delete, clear selection).

## `sorting`

type: `SortingState`

Control table data sorting externally.

## `onSortingChange`

type: `(state: SortingState) => void`

Callback to capture table data sorting changes.

## `processingMode`

type: `'internal' | 'external'`

Configure how table data is processed (e.g. searching, sorting). Default: `'internal'`.

## `renderMode`

type: `'virtual' | 'paginated'`

Select which type of table rendering to use. Default: `'virtual'`.

## `pageCount`

type: `number`

Controlled page count number for pagination. Required for `renderMode="paginated"` and `processingMode="external"`.

## `locale`

type: `string | string[] | Intl.Locale`

Optional locale for formatting dates and numbers.

## `caption`

type: `string`

Accessible table caption rendered below the table body.

## `tableHeight`

type: `number | 'full'`

Constrain the table height in pixels. Pass `'full'` to make the table fill the entire viewport height. Important for virtualized tables.

## `id`

type: `string`

Custom HTML `id` for the table element. If not provided, a unique ID is auto-generated. Useful for accessibility and external referencing.

## `className`

type: `string`

Custom CSS class applied to the table element.

## `children`

type: `ReactNode`

React children rendered alongside the table.
