import { useReducer } from 'react';
import type {
  EmojiAction,
  EmojiFN,
  EmojiiState,
  IEmoji,
  UseEmoji,
} from '../types';

function reducer(state: EmojiiState, action: EmojiAction) {
  const { emoji } = action;
  const emojiFromState = state.find((em) => em.emoji === emoji.emoji) || emoji;
  emojiFromState.counter = emojiFromState.counter || 0;
  switch (action.type) {
    case 'i':
      emojiFromState.counter++;
      break;
    case 'd':
      emojiFromState.counter--;
      if (emojiFromState.counter <= 0) emojiFromState.counter = 0;
  }
  return state
    .map((rea) => {
      if (rea.emoji === emojiFromState.emoji) {
        return emojiFromState.counter! > 0 ? null : emojiFromState;
      }
      return rea;
    })
    .filter((e) => e !== null) as IEmoji[];
}

export default function useEmojis(initialEmojis: IEmoji[] = []): UseEmoji {
  const [emojis, dispatch] = useReducer(reducer, [...initialEmojis]);

  const increment: EmojiFN = (emoji) => dispatch({ type: 'i', emoji: emoji });
  const decrement: EmojiFN = (emoji) => dispatch({ type: 'd', emoji: emoji });

  return [emojis, increment, decrement];
}
