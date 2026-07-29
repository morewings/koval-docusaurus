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

## `enableRowSelection`

type: `boolean | ((row: Row<TableRow>) => boolean)`

Function to dynamically protect specific rows from being selected. Default: `true`.

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

type: `string | ReactNode`

Accessible table caption.

## `tableHeight`

type: `number`

Constrain the table height in pixels. Important for virtualized tables.

## `selectable`

type: `boolean`

Make rows selectable using checkboxes.
