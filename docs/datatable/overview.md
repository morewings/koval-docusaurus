---
sidebar_position: 1
title: Overview
---

# Data Table

The `DataTable` component is a powerful, flexible, and accessible grid for displaying large amounts of tabular data. It supports virtualization for handling huge datasets seamlessly, along with pagination and customizable processing models.

## Features

- **Virtualization & Pagination**: Support for rendering large datasets seamlessly using virtualized scrolling or traditional pagination.
- **Internal vs External Processing**: Flexible `processingMode` which allows the table to manage its own state (`internal`) or surrender control to a parent component/server (`external`).
- **Data Formatting**: Built-in column types that automatically format values for strings, decimals, percentages, currencies, dates, and units using Intl API.
- **Interactions**: Supports row selection, column sorting, filtering, and editable cells.
- **Custom Renderers**: Highly extensible. You can supply custom cell renderers for table headers, footers, data cells, and filter inputs.
- **Column Pinning**: Freeze columns to the left or right side of the table viewport.

## Benefits

- **Performance**: High performance out of the box with the `virtual` rendering mode, which efficiently handles up to tens of thousands of rows.
- **Accessibility**: Built with accessible markup and standard interactions to ensure a great experience for all users.
- **Internationalization**: Easily adapt data presentation to different regions using the native `locale` prop.
- **Scalability**: By supporting external processing mode, you can connect the data table to your backend API to filter, sort, and paginate millions of records easily.
