/**
 * @typedef {Object} Emoji - Object containing infos about an emoji
 * @property {string} emoji - The emoji itself
 * @property {string} label - Label of the emoji, used for accessibility reasons
 * @property {number?} counter - Number of times the emoji was selected
 */

import { useReducer } from 'react';

export default function useEmojis(initialEmojis = []) {
  const [emojis, dispatch] = useReducer(reducer, [...initialEmojis]);

  const increment = (emoji) => dispatch({ type: 'i', emoji: emoji });
  const decrement = (emoji) => dispatch({ type: 'd', emoji: emoji });

  return [emojis, increment, decrement];
}

function reducer(state, action) {
  const emoji = action.emoji;
  let emojiFromState = state.filter((em) => em.emoji === emoji.emoji)[0];

  if (!emojiFromState) {
    emoji.counter = 0;
    emojiFromState = emoji;
  }
  switch (action.type) {
    case 'i':
      emojiFromState.counter++;
      break;
    case 'd':
      emojiFromState.counter--;
      if (emojiFromState.counter < 0) emojiFromState.counter = 0;
  }
  return [
    ...state.filter((rea) => rea.emoji !== emojiFromState.emoji),
    ...(emojiFromState.counter > 0 ? [emojiFromState] : []),
  ];
}
