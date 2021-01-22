import { useReducer } from 'react';
import { EmojiObject } from '../types';

export default function useEmojis(
  initialEmojis: Array<EmojiObject> = [],
): [Array<EmojiObject>, Function, Function] {
  const [emojis, dispatch] = useReducer(reducer, [...initialEmojis]);

  const increment: Function = (emoji: EmojiObject) =>
    dispatch({ type: 'i', emoji: emoji });
  const decrement: Function = (emoji: EmojiObject) =>
    dispatch({ type: 'd', emoji: emoji });

  return [emojis, increment, decrement];
}

function reducer(
  state: Array<EmojiObject>,
  action: {
    emoji: EmojiObject;
    type: 'i' | 'd';
  },
): Array<EmojiObject> {
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
