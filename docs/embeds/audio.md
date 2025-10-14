# Audio player

`Audio` component plays provided an audio file using a `HTMLAudioElement`.

## Props

| Prop Name | Type                                       | Description                                             |
| --------- | ------------------------------------------ | ------------------------------------------------------- |
| `poster`  | `string`                                   | URL of an image to display while loading or when paused |
| `onReady` | `(event: SyntheticEvent<Element>) => void` | Callback when audio is ready to play                    |
| `onError` | `(event: SyntheticEvent<Element>) => void` | Callback for audio errors                               |
| `onPlay`  | `(event: SyntheticEvent<Element>) => void` | Callback when playback starts                           |
| `onPause` | `(event: SyntheticEvent<Element>) => void` | Callback when playback pauses                           |
| `src`     | `string`                                   | URL of the audio file to play                           |
| `sources` | `Source[]`                                 | Array of source objects for different formats/devices   |
| `title`   | `string`                                   | Title displayed for the audio player                    |

## Provide a source

Developer can choose between two ways of audio source configuration. `src` allows setting a single URL of the audio file to embed.

`sources` accepts and array of Source config objects. `mediaCondition` allows using this source depending on provided Media Query.

```js
const sources = [
  {
    src: 'foo.ogg',
    type: 'audio/ogg',
    mediaCondition: '(width >= 800px)',
  },
];
```

## Demo

```jsx live
//import {Audio} from 'koval-ui';

function Example(props) {
  return (
    <Audio
      title="Sons of AI - Koval Revolution"
      src="/img/sample.mp3"
      poster="/img/audio-poster.jpeg"
    />
  );
}
```
