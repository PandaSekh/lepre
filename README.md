
<p align="center">
  <img src="https://raw.githubusercontent.com/PandaSekh/lepre/master/example/public/rabbit.png?token=AIPNRUKQUMFQJYCJ4W53OM3ACALSU" width="100" height="100" alt="Rabbit Emoji">
</p>
<h1 align="center">
  L.E.P.R.E
</h1>
<p align="center">
  <img src="https://travis-ci.com/PandaSekh/lepre.svg?token=9UEvCKGSQs8hrivJiSpX&branch=master" alt="Travis CI">
  <a href="https://www.npmjs.org/package/lepre"><img src="https://img.shields.io/npm/v/lepre.svg" alt="npm"></a>
  <img src="https://codecov.io/gh/PandaSekh/lepre/branch/master/graph/badge.svg?token=16CDE37WS5" alt="Code Coverage">
  <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Code Style">
</p>
<p align="center">🐰 Lightweight Emoji Picker for React Enthusiasts.</p>

Lepre is a thin and lightweight (<1Kb) emoji picker library for React. It's fully customizable and was inspired by [Github's reactions](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/).

<p align="center">
 <img src="https://raw.githubusercontent.com/PandaSekh/lepre/master/example/public/example.gif?token=AIPNRUILOBDDX67IT6RVAIDACCBGK" alt="Lepre Example">
</p>

* * *

## Install

```bash
npm install --save lepre
```

or

```bash
yarn add lepre
```

## Index
- [Examples](#examples)
  - [Default Reaction Block](#default-reaction-block)
  - [Custom Component](#custom-component)
- [Usage](#usage)
  - [Default Reaction Block](#default-reaction-block)
  - [Custom Block](#custom-block)
- [API](#api)
  - [Emoji (Object)](#emoji)
  - [Emoji (Event)](#emoji-event)
  - [useEmojis](#useemojis)
  - [Reactions](#reactions)
  - [Emoji (Component)](#emojicomponent)
  - [EmojiCounter](#emojicounter)
  - [EmojiPicker](#emojipicker)
- [Limitations](#limitations)
- [CSS](#css)
  - [Starter CSS](#starter-css)
- [License](#license)


## Examples
### Default Reaction Block
```jsx
import React from 'react';

import Reactions from 'lepre';

export default function Example() {
  const MY_EMOJIS = [
    { emoji: '🐼', label: 'panda' },
    { emoji: '📞', label: 'cell' },
  ];

  return <Reactions emojis={MY_EMOJIS} />;
}
```

### Custom Component
```jsx
import React from 'react';
import { EmojiCounter, EmojiPicker, useEmojis } from 'lepre';

const MY_EMOJIS = [
  { emoji: '🐼', label: 'panda' },
  { emoji: '📞', label: 'cell' },
];
export default function CustomReactions() {
  const [emojis, increment] = useEmojis();

  let i = 0;
  const selected = emojis
    .sort((a, b) => (a.emoji < b.emoji ? 1 : -1)) // No sorting is applied by default
    .map((emoji) => (
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
            availableEmojis={MY_EMOJIS}
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

## Usage
`lepre` can be used in two ways, either by importing a single block which handles everything for you, or by importing each component and then do the connections yourself.
While the first method is plug and play and easy to get started, the latter will give you more flexibility on the layout. 

### Default Reaction Block
[API Documentation](#reactions).  
To use the Reaction Block, import the default Component from `lepre`.
```jsx
import React from 'react';
import Reactions from 'lepre';
```
This Component only requires an `emojis` prop to work. `emojis` is an array of [emoji objects](#emoji) which will be available to be selected.
Optionally, it also accepts a `selected` prop, which is an array of emojis already selected.

```jsx
  const MY_EMOJIS = [
    { emoji: '🐼', label: 'panda' },
    { emoji: '📞', label: 'cell' },
  ];

  return <Reactions emojis={MY_EMOJIS} />;
```

### Custom Block
To create a Custom Block you have to individually import the three building blocks of this library:
- [EmojiCounter Component](#emojicounter)
- [EmojiPicker Component](#emojipicker)
- [useEmojis Hook](#useemojis)

```jsx
import React from 'react';
import { EmojiCounter, EmojiPicker, useEmojis } from 'lepre';
```

Then use the useEmojis hook to create a state for the emojis.

```jsx
const emojisFromDatabase = fetch(...);

const [emojis, increment, decrement] = useEmojis(emojisFromDatabase);
```

Map the emojis with the EmojiCounter Component.

```jsx
let i = 0;
const mappedEmojis = emojis
  .sort((a, b) => (a.emoji < b.emoji ? 1 : -1)) // This is optional, but recommended
  .map((emoji) => (
    <EmojiCounter
      key={i++}
      emoji={emoji}
      initialValue={emoji.counter}
      onClick={increment}
    />
  ));
```

Or create your own Component with the Emoji Component.

```jsx
import React from 'react';
import EmojiComponent from './EmojiComponent.js';

export default function MyCustomEmojiComponent({ emoji, initialValue = 0, increment, decrement }){
  return (
    <span>
      <span onClick={() => increment(emoji)}>Incr</span>
      <span onClick={() => decrement(emoji)}>Decr</span>
      <EmojiComponent emoji={emoji} />
      <div>
        <span>{initialValue}</span>
      </div>
    </span>
  );
}
```

Finally, render the components however you want.

```jsx
return (
<div>
  <div>
    <EmojiPicker
      availableEmojis={AVAILABLE_EMOJIS}
      onClick={increment}
      selectedEmojis={emojis}
    />
  </div>
  <p>{YOUR_CONTENT}</p>
  <div>{mappedEmojis}</div>
</div>
);
```

## API
- [Emoji (Object)](#emoji-object)
- [Emoji (Event)](#emoji-event)
- [useEmojis](#useemojis)
- [Reactions](#reactions)
- [Emoji (Component)](#emojicomponent)
- [EmojiCounter](#emojicounter)
- [EmojiPicker](#emojipicker)

* * *

### `Emoji (Object)`
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

* * *

### `Emoji (Event)`
```jsx
addEventListener("emoji", e => console.log(e.emoji));
```

Event dispatched whenever an emoji gets clicked.

- `emoji: Emoji` emoji from which the event was dispatched. 

* * *

### `useEmojis`
```jsx
const [emojis, increment, decrement] = useEmojis(initialValue);
```

- `emojis: Array<Emoji>` State. 
- `increment(Emoji): function` Increment the counter of the given Emoji. 
- `decrement(Emoji): function` Decrement the counter of the given Emoji. 
- `initialValue: Array<Emoji>` An initial value for the state. 

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

* * *

### `Emoji`
```jsx
import {Emoji} from 'lepre';

const myEmoji= (
  <Emoji emoji={{emoji: "🐰", label: "rabbit"}} onClick={myCallback} />
);
```

Component used to render Emojis.

- `emoji: Emoji`
  The Emoji to render
- `onClick?: function`
  Optional callback

* * *

### `EmojiCounter`
```jsx
import {EmojiCounter} from 'lepre';

const counter = (
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
  
* * *
  
### `EmojiPicker`
```jsx
import {EmojiPicker} from 'lepre';

const emojisToBeUsed = [
  {emoji: "🐰", label: "rabbit"},
  {emoji: "🐻", label: "bear"}
]

const emojisAlreadySelectedIGotFromTheDatabase = [
  {emoji: "🐰", label: "rabbit", counter: 10},
]

const picker = (
  <EmojiPicker  selectedEmojis={emojisAlreadySelectedIGotFromTheDatabase} 
                availableEmojis={emojisToBeUsed} 
                onClick={myCallback} />
);
```

Component used to render the Emoji Picker itself.

- `selectedEmojis: Array<Emoji>`
  Array of Emojis already selected
- `availableEmojis: Array<Emoji>`
  Array of all emojis available
- `onClick?: function`
  Optional callback


## Limitations

`lepre` aims to be fast and thin and because of that it has some limitations:

- Emojis have to be configured first, there are no defaults
- CSS is not included (but there's a starter CSS in this README!)

## CSS

`lepre` comes with no CSS by default because rarely the stock design will remain unchanged. I thought that no CSS was better than unused CSS.
Every component comes with classes already defined that you can use for styling.

- `emoji` Span container of EmojiComponent
- `emoji-adder` Span container of the EmojiComponent which renders the "+" sign
- `emoji-container` Span container of EmojiCounter
- `emoji-counter` Span container of the counter in EmojiCounter
- `emoji-menu-open` Class applied to the emoji selection menu when it's opened
- `emoji-menu-closed` Class applied to the emoji selection menu when it's closed
- `reaction-block` Div container of the whole library (Default Reactions Block only)


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
