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

| Prop Name                | Type                         | Description                                           |
| ------------------------ | ---------------------------- | ----------------------------------------------------- |
| `width`                  | `number                      | Set the width of the video player                     |
| `height`                 | `number`                     | Set the height of the video player                    |
| `poster`                 | `string`                     | URL for an image to display while the video downloads |
| `loop`                   | `boolean`                    | Enable looping back to the start when finished        |
| `muted`                  | `boolean` s                  | Silence audio during playback                         |
| `preload`                | `'none', 'metadata', 'auto'` | Select loading mode                                   |
| `autoPlay`               | `boolean`                    | Start playing automatically when loaded               |
| `enablePictureInPicture` | `boolean`                    | Enable Picture-in-picture mode                        |
| `showDownload`           | `boolean`                    | Display the download button                           |
| `enableFullscreen`       | `boolean`                    | Show the fullscreen toggle                            |
| `showControls`           | `boolean`                    | Display playback controls (play/pause, volume, etc.)  |
| `showTitle`              | `boolean`                    | Show video title above player                         |
| `title`                  | `string`                     | Custom title for the video                            |
| `onReady`                | `(event) => void`            | Callback when video is ready to play                  |
| `onError`                | `(event) => void`            | Callback for video errors                             |
| `onPlay`                 | `(event) => void`            | Callback when playback starts                         |
| `onPause`                | `(event) => void`            | Callback when playback pauses                         |
| `src`                    | `string`                     | Video URL (direct link to the video file)             |
| `sources`                | `Source[]`                   | Advanced configuration for multiple sources/formats   |
