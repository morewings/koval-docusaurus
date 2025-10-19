---
sidebar_position: 2
---

# ⚙️ Create & customize theme

Koval UI allows developers to customize existing themes or create completely new ones.

## Theme anatomy

Koval theme is a `Record` containing theme properties names and values. Koval UI provides `ThemeType` export to ensure type safety. Developers can configure color and typography properties inside by a theme object.

```typescript
import {type ThemeType} from 'koval-ui';

const theme = {
  //...
} satisfies ThemeType;
```

## Colors

The color system is built on a palette of _brand_, _background_, and _status_ colors that work together to create a visually appealing and intuitive user interface.

### Brand colors

:::tip

_Dark_ and _light_ terms are used assuming `light` color-scheme. Use the opposite meaning for a `dark` color-scheme.

:::

The theme includes two sets of brand colors, each with a primary, dark, and light variant. Colors are named after music notes: `Do`, `Re`, `Mi`, `Fa`, `Sol`.

#### Main palette

| Property    | Description                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------- |
| **colorDo** | The main brand color. It must contrast well with both `background000` and `background600`.        |
| **colorRe** | The darkest variant of the brand color, designed to contrast with `background000` and `colorDo`.  |
| **colorMi** | The lightest variant of the brand color, designed to contrast with `background600` and `colorDo`. |

#### Alternative palette

This palette is used when an accented contrast with the primary brand colors is needed.

| Property     | Description                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------- |
| **colorFa**  | The main alternative brand color. Constrast with `background000`, `background600` and `colorDo`.  |
| **colorSol** | The darkest variant of the alternative brand color. Contrast with `background000` and `colorFa`   |
| **colorLa**  | The lightest variant of the alternative brand color. Contrast with `background600` and `colorFa`. |

### Base colors

| Property              | Description                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| **textColor**         | The default color for all text. High contrast against the white background color for readability. |
| **background000**     | The lightest background color. Think about paper.                                                 |
| **background100-400** | Intermediate shades for creating depth, layers, and subtle UI elements like borders.              |
| **background500**     | A strong, dark shade suitable for prominent elements like headers.                                |
| **background600**     | The darkest level.                                                                                |

### Status and action colors

These colors are used to provide contextual feedback to the user for actions, alerts, and system status. Each color must have sufficient contrast against both light (`background000`) and dark (`background600`) backgrounds.

| Property         | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| **colorError**   | Indicates an error, failure, or dangerous action.                                      |
| **colorWarning** | Communicates a warning that requires user attention.                                   |
| **colorSuccess** | Shows a successful operation, confirmation, or approval.                               |
| **colorAction**  | Used for interactive elements like links and primary buttons to indicate clickability. |

## Typography

The typography section defines the fonts, sizes, and weights used for all text elements, establishing a clear and readable visual hierarchy.

### Font families

- `fontFamily`: This is the primary font family (may consist of single font) used by most components in the library. It should be selected for its readability and versatility.

- `fontFamilyMonospace`: A monospaced font specifically designated for use within `code` and `pre` elements to ensure proper alignment and readability of code snippets.

### Font sizes

- `fontSizeH1` to `fontSizeH6`: These properties define the font sizes for the six levels of headings, allowing for clear structural organization of content.

- `fontSizeText`: This is the default font size for body text, such as in paragraph elements. It is expected to be optimized for maximum readability.

- `fontSizeSmall`, `fontSizeMedium`, `fontSizeLarge`: These provide additional, arbitrary font sizes for use in various components where more granular control over text size is needed.

### Font weights

The font weight properties provide control over the boldness of the text, creating emphasis and distinction.

- `fontWeightNormal`: The default font weight, used for most body text.

- `fontWeightBolder`: A heavier weight intended to stand out from normal text.

- `fontWeightBold`: The strongest font weight, used for maximum emphasis.
