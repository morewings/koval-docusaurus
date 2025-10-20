# Video player

Video component plays provided video file using a HTMLVideoElement.

## Provide a source

Developer can choose between two ways of audio source configuration. `src` allows setting a single URL of the audio file to embed.

`sources` accepts and array of Source config objects. `mediaCondition` allows using this source depending on provided Media Query.

```js
const sources = [
  {
    src: 'foo.ogg',
    type: 'video/ogg',
    mediaCondition: '(width >= 800px)',
  },
];
```

## Demo

```jsx live
//import {Video} from 'koval-ui';

function Example(props) {
  return (
    <Video
      title="Big Buck Bunny"
      width={720}
      height={405}
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      poster="/img/video-poster.jpg"
    />
  );
}
```

## Props

### `src`

type: `string`

Provide video url

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#src)

### `sources`

type: `Source[]`

Provide video sources configs array. An advanced alternative to `src` prop

### `width`

type: `number | '100%'`

Set the width of the video file

### `height`

type: `number`

Set the height of the video file

### `poster`

type: `string`

A URL for an image to be shown while the video is downloading.

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#poster)

### `loop`

type: `boolean`

Enable to automatically seek back to the start upon reaching the end of the video

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#loop)

### `showTitle`

type: `boolean`

Show video title

### `title`

type: `string`

Provide a title for the video

### `preload`

type: `'none' | 'metadata' | 'auto'`

Select loading mode

- `none` – video shouldn't be preloaded.
- `metadata` – only video metadata (for example, length) is fetched.
- `auto` – whole video file can be downloaded.

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#preload)

### `autoPlay`

type: `boolean`

Enable to play video automatically when it loads

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#autoplay)

### `enablePictureInPicture`

type: `boolean`

Enable Picture-in-picture mode

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#disablepictureinpicture)

### `showDownload`

type: `boolean`

Display the download video button

### `enableFullscreen`

type: `boolean`

Show the fullscreen mode button

### `showControls`

type: `boolean`

Show video play controls

### `onReady`

type: `(event: SyntheticEvent<HTMLVideoElement>) => void`

Set a callback to run when the video is buffered enough to play on the user side

### `onError`

type: `(event: SyntheticEvent<HTMLVideoElement>) => void`

Set a callback to capture video errors

### `onPlay`

type: `(event: SyntheticEvent<HTMLVideoElement>) => void`

Set a callback to run when the user plays the video

### `onPause`

type: `(event: SyntheticEvent<HTMLVideoElement>) => void`

Set a callback to run when the user pauses the video
