import { useReducer } from 'react';

function reducer(state, action) {
  const emoji = action.emoji;
  const emojiFromState = state.filter((em) => em.emoji === emoji.emoji)[0];

  if (!emojiFromState) {
    emoji.counter = 1;
    return [...state, emoji].sort((a, b) => (a.counter < b.counter ? 1 : -1));
  } else {
    switch (action.type) {
      case 'increment':
        emojiFromState.counter++;
        break;
      case 'decrement':
        emojiFromState.counter--;
        break;
      default:
        throw new Error('Invalid action');
    }
    return [
      ...state.filter((rea) => rea.emoji !== emojiFromState.emoji),
      ...(emojiFromState.counter > 0 ? [emojiFromState] : []),
    ].sort((a, b) => (a.counter < b.counter ? 1 : -1));
  }
}

export default function useEmojis(initialEmojis = []) {
  const [emojis, dispatch] = useReducer(
    reducer,
    [...initialEmojis].sort((a, b) => (a.counter < b.counter ? 1 : -1)),
  );

  const increment = (emoji) => dispatch({ type: 'increment', emoji: emoji });
  const decrement = (emoji) => dispatch({ type: 'decrement', emoji: emoji });

  return [emojis, increment, decrement];
}
