# Audio player

`Audio` component plays provided an audio file using a `HTMLAudioElement`.\

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

## Props

### `src`

type: `string`

URL of the audio file to play

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio#src)

### `sources`

type: `Source[]`

Provide audio sources configs array. An advanced alternative to `src` prop

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/source)

### `title`

type: `string`

URL of the audio file to play

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio#src)

### `poster`

type: `string`

Provide a title for the audio

See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#poster)

### `onReady`

type: `(event: SyntheticEvent<Element>) => void`

Callback when audio is ready to play

### `onError`

type: `(event: SyntheticEvent<Element>) => void`

Callback for audio streaming and playing errors

### `onPlay`

type: `(event: SyntheticEvent<Element>) => void`

Callback when playback starts

### `onPause`

type: `(event: SyntheticEvent<Element>) => void`

Callback when playback pauses

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
