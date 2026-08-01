---
sidebar_position: 1
title: Overview
---

# Data Table

The `DataTable` component is a powerful, flexible, and accessible grid for displaying large amounts of tabular data. It is built on top of **[TanStack Table](https://tanstack.com/table)** (formerly React Table), which provides a headless, unstyled table engine. The DataTable wraps this engine with a complete UI layer including virtualized scrolling, pagination, filtering, sorting, row selection, and built-in dialogs for editing and deleting data.

:::tip

`DataTable` rerender is a resource-consuming operation. To provide the best UX, maintain referential equality for component props — wrap objects with `useMemo` and functions with `useCallback`.

:::

## Rendering Modes

The `renderMode` prop controls how rows are rendered:

- **`virtual`** (default) — Only the rows visible in the viewport are rendered. Rows above and below are replaced by spacer `<tr>` elements. Uses an overscan of 6 rows and a fixed cell height of 42px. Ideal for datasets with thousands of rows loaded entirely in the browser.
- **`paginated`** — Rows are split into discrete pages. A pagination bar appears below the table with page navigation and a configurable "rows per page" input.

## Processing Modes

The `processingMode` prop controls where data operations (sorting, filtering, pagination) are executed:

- **`internal`** (default) — The table manages all data mutations internally. You provide the full dataset via `tableData`, and the component handles sorting, filtering, and pagination in memory.
- **`external`** — The table acts as a controlled presentation layer. You receive change events (`onSortingChange`, `onFiltersChange`, `onPaginationChange`), make network requests, and feed the results back via `tableData`. The `pageCount` prop is required in this mode so the pagination UI knows the total number of pages.

## Column System

Every column is defined as an object in the `columns` array. Each column must have an `id`, a display `name`, and either an `accessorKey` (dot-notation path into the row data) or an `accessorFn` (a function that computes the value dynamically).

### Built-in Column Types

The `columnType` property controls how cell values are formatted. All formatting is locale-aware via the `locale` prop:

| Type         | Description                        |
| ------------ | ---------------------------------- |
| `text`       | Plain text (default)               |
| `decimal`    | Formatted decimal number           |
| `percentage` | Formatted percentage               |
| `currency`   | Locale-aware currency with symbols |
| `unit`       | Measurement with unit display      |
| `date`       | Formatted date/time                |
| `select`     | Dropdown-style display             |

Pass additional formatting options through `cellProps` (e.g., `currency`, `unit`, date parts, digit precision).

### Column Capabilities

Each column can be independently configured for:

- **`sortable`** — Enables ascending/descending sort on click. Choose from 7 built-in sorting modes or provide a custom `sortingFn`.
- **`filterable`** — Enables a filter button on the column header. Choose from 10 built-in filter modes, 2 custom filter functions (`isInDateRange`, `isInPercentRange`), or provide your own `filterFn`.
- **`editable`** — Allows the column to appear in the mass-edit dialog.
- **`pinnable`** — Allows the column to be frozen to the left or right edge.
- **`columnCell`** — Replaces the default cell renderer with a custom React component.
- **`headerCell` / `footerCell`** — Replaces the default header or footer renderer.
- **`filterInput`** — Replaces the default filter input in the filter dialog.

## Row Selection and Mass Actions

Setting `selectable={true}` adds a checkbox column and a contextual action bar above the table. When one or more rows are selected, the bar reveals three actions:

1. **Clear selection** — Deselects all rows.
2. **Delete row(s)** — Opens a confirmation dialog; on confirm, rows are removed and `onEdit` is called with an `EditState` payload.
3. **Edit row(s)** — Opens a dialog where you pick an editable column and a new value, applied to all selected rows.

The action bar also displays the current selection count vs. total pre-filtered row count.

## Filtering and Sorting

### Sorting Modes

| Mode                        | Description                   |
| --------------------------- | ----------------------------- |
| `auto`                      | Auto-detect best strategy     |
| `alphanumeric`              | Case-insensitive alphanumeric |
| `alphanumericCaseSensitive` | Case-sensitive alphanumeric   |
| `text`                      | Case-insensitive text         |
| `textCaseSensitive`         | Case-sensitive text           |
| `datetime`                  | Date/time comparison          |
| `basic`                     | Greater-than / less-than      |

:::note

Multi-column sorting is currently disabled. Only single-column sorting is supported.

:::

### Filter Modes

| Mode                      | Description                 |
| ------------------------- | --------------------------- |
| `auto`                    | Auto-detect best strategy   |
| `includesString`          | Case-insensitive substring  |
| `includesStringSensitive` | Case-sensitive substring    |
| `equalsString`            | Exact string match          |
| `arrIncludes`             | Array includes value        |
| `arrIncludesAll`          | Array includes all values   |
| `arrIncludesSome`         | Array includes some values  |
| `equals`                  | Strict equality (`===`)     |
| `weakEquals`              | Weak equality (`Object.is`) |
| `inNumberRange`           | Numeric range               |

### Custom Filter Functions

Two built-in custom filters are registered out of the box:

- **`isInDateRange`** — Filters a date column by a `[from, to]` range.
- **`isInPercentRange`** — Filters a percentage column by a `[from, to]` range (cell values are multiplied by 100 before comparison).

## Empty State

When filters produce zero matching rows, the table displays a "No data to render" message with a **Reset all filters** button that clears all active filters in one click.

## Internationalization

Pass a BCP 47 locale string (e.g., `'de-DE'`, `'ja-JP'`), an `Intl.Locale` instance, or an array of locale identifiers via the `locale` prop. The locale cascades to all cells, formatting dates, numbers, currencies, and units consistently. When omitted, the browser's default locale is used.

## Accessibility

- The table supports an accessible `caption` rendered below the table body, linked via `aria-describedby`.
- An auto-generated (or custom) HTML `id` is applied to the table element.
- Modal dialogs for filtering, editing, and deletion use stable IDs derived from the table `id`.
