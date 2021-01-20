import { useReducer } from 'react';

function reducer(state, action) {
  const emoji = action.emoji;
  let emojiFromState = state.filter((em) => em.emoji === emoji.emoji)[0];

  if (!emojiFromState) {
    emoji.counter = 0;
    emojiFromState = emoji;
  }
  switch (action.type) {
    case 'increment':
      emojiFromState.counter++;
      break;
    case 'decrement':
      emojiFromState.counter--;
      if (emojiFromState.counter < 0) emojiFromState.counter = 0;
  }
  return [
    ...state.filter((rea) => rea.emoji !== emojiFromState.emoji),
    ...(emojiFromState.counter > 0 ? [emojiFromState] : []),
  ];
}

export default function useEmojis(initialEmojis = []) {
  const [emojis, dispatch] = useReducer(reducer, [...initialEmojis]);

  const increment = (emoji) => dispatch({ type: 'increment', emoji: emoji });
  const decrement = (emoji) => dispatch({ type: 'decrement', emoji: emoji });

  return [emojis, increment, decrement];
}
