---
sidebar_position: 4
---

# Pagination

`Pagination` is a navigational component that allows users to navigate through a large set of content by dividing it into discrete pages. It includes controls to move to the next, previous, first, and last pages, as well as to jump to a specific page.

Pagination starts from number `1`.

## Demo

```jsx live
//import {Pagination} from 'koval-ui';

function Example(props) {
  const [page, setPage] = useState(333);
  const handlePageSelect = useCallback(pageNumber => {
    setPage(pageNumber);
  }, []);
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
      <div>
        Selected page: <Strong>{page}</Strong>
      </div>
      <Pagination
        onPageSelect={handlePageSelect}
        showNavigation={true}
        showPageButtons={true}
        totalPages={777}
        selectedPage={page}
      />
    </div>
  );
}
```

## Props

### `totalPages`

type: `number` required

Set the total number of pages

### `selectedPage`

type: `number` required

Set the selected page

### `showNavigation`

type: `boolean`

Show the navigation block on the right

### `showPageButtons`

type: `boolean`

Show page number buttons on the left

### `onPageSelect`

type: `(pageNumber: number) => void` required

Callback to run on page change
