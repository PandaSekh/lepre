
<p align="center">
  <img src="https://raw.githubusercontent.com/PandaSekh/lepre/master/example/public/rabbit.png?token=AIPNRUKQUMFQJYCJ4W53OM3ACALSU" width="100" height="100" alt="Rabbit Emoji">
</p>
<h1 align="center">
  L.E.P.R.E
</h1>
<p align="center">
  <a href="https://www.npmjs.org/package/lepre">
    <img src="https://travis-ci.com/PandaSekh/lepre.svg?token=9UEvCKGSQs8hrivJiSpX&branch=master" alt="Travis CI">
    <img src="https://img.shields.io/npm/v/lepre.svg" alt="npm">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Code Style">
  </a>
</p>
<p align="center">🐰 Lightweight Emoji Picker for React Enthusiasts.</p>

Lepre is a thin and lightweight (<1Kb) emoji picker library for React. It's fully customizable and was inspired by [Github's reactions](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/).

* * *

## Install

```bash
npm install --save lepre
```

or

```bash
yarn add lepre
```

## Examples

Default component.
```jsx
import React from 'react';

import Reactions from 'lepre';

export default function Example() {
  const DEFAULT_EMOJI_OPTIONS = [
    { emoji: '🐼', label: 'panda' },
    { emoji: '📞', label: 'cell' },
  ];

  return <Reactions emojis={DEFAULT_EMOJI_OPTIONS} />;
}
```

Custom Component.
```jsx
import React from 'react';
import { EmojiCounter, EmojiPicker, useEmojis } from 'lepre';

const DEFAULT_EMOJI_OPTIONS = [
  { emoji: '🐼', label: 'panda' },
  { emoji: '📞', label: 'cell' },
];
export default function CustomReactions() {
  const [emojis, increment] = useEmojis();

  let i = 0;
  const selected = emojis.map((emoji) => (
  <EmojiCounter
        key={i++}
        emoji={emoji}
        initialValue={emoji.counter}
        onClick={increment}
      />
  ));

  return (
    <div className='comment'>
      <div className='custom-picker'>
        <EmojiPicker
            availableEmojis={DEFAULT_EMOJI_OPTIONS}
            onClick={increment}
            selectedEmojis={emojis}
          />
      </div>
      <p>You can customize the reaction block however you want!</p>
      <div className='custom-selection'>{selected}</div>
    </div>
  );
}

```

## API
- [Emoji (Object)](#emoji)
- [Emoji (Event)](#emoji-event)
- [Reactions](#reactions)
- [Emoji (Component)](#emojicomponent)
- [EmojiCounter](#emojicounter)

### `Emoji`
```jsx
const Emoji = {
  emoji: "🐰", 
  label: "rabbit", 
  counter: 0
}
```

Object containing infos about an emoji.

- `emoji: string`
  The emoji itself.
- `label: string`
  Label of the emoji, used for accessibility reasons
- `counter?: number`
  Number of times the emoji was selected (Optional) 

### `Emoji (Event)`
```jsx
addEventListener("emoji", e => console.log(e.emoji));
```

Event dispatched whenever an emoji gets clicked.

- `emoji: Emoji` emoji from which the event was dispatched. 

### `Reactions`
```jsx
import Reactions from 'lepre';

const reactionBlock = <Reactions emojis={EMOJI_OPTIONS} selected={SELECTED_EMOJIS} />
```

Default block, already configured and ready to be used anywhere.

- `emojis: Array<Emoji>`
  All available emojis.
- `selected: Array<Emoji>`
  Emojis already selected (taken from a database, from example)

### `EmojiComponent`
```jsx
import {EmojiComponent} from 'lepre';

const myEmojiComponent = (
  <EmojiComponent emoji={{emoji: "🐰", label: "rabbit"}} onClick={myCallback} />
);
```

Component used to render Emojis.

- `emoji: Emoji`
  The Emoji to render
- `onClick?: function`
  Optional callback


### `EmojiCounter`
```jsx
import {EmojiCounter} from 'lepre';

const reactionBlock = (
  <EmojiCounter emoji={{emoji: "🐰", label: "rabbit"}} onClick={myCallback} initialValue={5}/>
);
```

Component used to render Emojis with a counter near them.

- `emoji: Emoji`
  Emoji to render
- `initialValue: number`
  Initial value of the counter
- `onClick?: function`
  Optional callback


## Limitations

Lepre aims to be fast and thin and because of that it has some limitations:

- Emojis have to be configured first, there are no defaults
- CSS is not included (but there's a starter CSS in this README!)

## CSS

Lepre comes with no CSS by default because rarely the stock design will remain unchanged. I thought that no CSS was better than unused CSS.
Every component comes with classes already defined that you can use for styling.

- `emoji` Span container of EmojiComponent
- `emoji-adder` Span container of the EmojiComponent which renders the "+" sign
- `emoji-container` Span container of EmojiCounter
- `emoji-counter` Span container of the counter in EmojiCounter
- `emoji-menu-open` Class applied to the emoji selection menu when it's opened
- `emoji-menu-closed` Class applied to the emoji selection menu when it's closed


### Starter CSS
To help with the design, here's the CSS used in the [Demo project](https://pandasekh.github.io/lepre/).

```css
.emoji {
  margin: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.1s;
  transition-property: transform;
}

.reaction-div {
  display: inline-flex;
  flex-flow: wrap;
}

.emoji-container {
  position: relative;
  user-select: none;
  display: flex;
}

.emoji-counter {
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 30%;
  background-color: #f55742;
  color: #fefefe;
}
.emoji:hover,
emoji:focus,
emoji:active {
  transform: scale(1.1);
}

.reaction-block {
  display: inline-flex;
  flex-flow: wrap;
}

.emoji-adder {
  user-select: none;
  position: relative;
  display: inline-block;
}

.emoji-menu-open {
  position: absolute;
  display: flex;
  top: 0px;
  left: 35px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fefefe;
  z-index: 10;
  width: auto;
}

.emoji-menu-closed {
  display: none;
}
```

## License

MIT © [PandaSekh](https://github.com/PandaSekh)
