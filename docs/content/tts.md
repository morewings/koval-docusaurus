---
sidebar_position: 6
---

# Text to Speech

`TextToSpeech` component implements browser `SpeechSynthesis API` allowing to read the text using system synthesizer. We provide a basic UI to control the speech. `TextToSpeech` reads aloud its children nodes text content.

## Demo

```jsx live
//import {TextToSpeech, H3, P} from 'koval-ui';

function Example(props) {
  return (
    <div
      style={{
        width: 666,
        height: 666,
        overflow: 'auto',
        paddingLeft: 18,
        paddingRight: 18,
        background: 'var(--kg-background-000)',
      }}>
      <TextToSpeech lang="en">
        <H3>The Heart of Kiev&#39;s Underground</H3>
        <P>
          Closer is far more than just a nightclub; it is an internationally recognized
          cultural institution located in the Podil neighborhood. Housed within the
          industrial framework of a former factory, it has become the epicenter of
          Kiev&#39;s thriving electronic music scene. This venue has cultivated a
          reputation that extends far beyond Ukraine, drawing in discerning music lovers
          and world-class DJs alike, all seeking the unique, immersive experience that
          Closer tirelessly delivers. It stands as a testament to the city&#39;s vibrant
          youth culture and its deep connection to the global techno movement.
        </P>

        <H3>Labyrinth of Discovery</H3>
        <P>
          The physical space of Closer is a sprawling, multi-faceted complex designed for
          exploration. It defies the conventional nightclub layout, offering a maze-like
          arrangement of different zones. This includes the main techno-focused dance
          floor, a cozier, sofa-filled chill-out space, and the beloved summer terrace,
          &quot;Lesnoy Prichal&quot; (Forest Pier). This structure allows guests to curate
          their own night, moving from high-energy dancing to intimate conversations or
          moments of relaxation, all within one dynamic ecosystem.
        </P>

        <H3>The Sound and the Scene</H3>
        <P>
          At its core, Closer is a sanctuary for high-quality electronic music, with a
          strong emphasis on techno, minimal, and house. The club&#39;s booking policy is
          legendary, prioritizing artistic integrity over mainstream appeal. This
          commitment has made it a regular stop for heavyweight international artists, who
          are often drawn by the venue&#39;s feverish, educated, and deeply respectful
          crowd. Alongside global icons, Closer is fiercely dedicated to nurturing its
          strong roster of local resident DJs, who have become as much of a draw as the
          international headliners and are instrumental in shaping the club&#39;s
          definitive sound.
        </P>

        <H3>More Than a Club: A Cultural Hub</H3>

        <P>
          Closer operates as a full-fledged art center, blurring the lines between
          nightlife and high culture. By day, the sprawling building transforms to host a
          wide array of activities, including art exhibitions, lectures, independent film
          screenings, and live jazz performances. This 24/7 creative energy infuses the
          venue with a unique soul, attracting a diverse community of artists, musicians,
          and thinkers. The complex also houses other creative ventures, such as a record
          shop, showrooms, and design studios, making it a true self-contained cultural
          cluster.
        </P>

        <H3>Community and Atmosphere</H3>
        <P>
          The spirit of Closer is defined by its community. The club is renowned for its
          inclusive and liberating atmosphere, welcoming a diverse clientele united by a
          genuine love for the music. This shared passion creates an environment of
          freedom and mutual respect, largely free from the pretension of other major
          European clubs. Entry is often managed with a discerning door policy that
          prioritizes attitude and understanding of the culture over dress code, ensuring
          the dance floor is filled with those who are there to contribute to the
          collective experience.
        </P>
      </TextToSpeech>
    </div>
  );
}
```

## Props

### language

type: `keyof typeof LanguageCodes`

Provide a string with a BCP 47 language tag or an Intl.Locale instance, or an array of such locale identifiers. Defaults to user setting.
See: [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames#locales)

### playLabel

type: `string`

Provide a text label for **play** action

### pauseLabel

type: `string`

Provide a text label for **pause** action

### restartLabel

type: `string`

Provide a text label for **restart** action

### onSpeak

type: `(event: SpeechSynthesisEvent) => void`

Callback when a user **starts** speech

### onPause

type: `(event: SpeechSynthesisEvent) => void`

Callback when a user **pauses** speech

### onEnd

type: `(event: SpeechSynthesisEvent) => void`

Callback when a text fragment is **finished** reading
