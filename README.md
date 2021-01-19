<p align="center">
  <a href="https://www.npmjs.org/package/lepre">
    <img src="https://travis-ci.com/PandaSekh/lepre.svg?token=9UEvCKGSQs8hrivJiSpX&branch=master" alt="Travis CI">
    <img src="https://img.shields.io/npm/v/lepre.svg" alt="npm">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Code Style">
  </a>
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/PandaSekh/lepre/master/example/public/rabbit.png?token=AIPNRUKQUMFQJYCJ4W53OM3ACALSU" width="100" height="100" alt="Rabbit Emoji">
</p>
<h1 align="center">
  L.E.P.R.E
</h1>

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

## Usage

```jsx
import React from 'react';

import Reactions from 'lepre';

function Example {
  const DEFAULT_EMOJI_OPTIONS = [
    { emoji: '🐼', label: 'panda' },
    { emoji: '📞', label: 'cell' },
  ];

  return <Reactions emojis={DEFAULT_EMOJI_OPTIONS} />;
}
```

## API

## Limitations

Lepre aims to be fast and thin and because of that it has some limitations:

- Emojis have to be configured first, there are no defaults
- CSS is not included (but there's a starter CSS in this README!)

## CSS

Lepre comes with no CSS by default because rarely the stock design will remain unchanged and I thought that no CSS was better than unused CSS.
To help with the design, here's the CSS I use in the [Demo project](https://pandasekh.github.io/lepre/).

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
