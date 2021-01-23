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
  const stateEmoji = state.find((em) => em.emoji === emoji.emoji);
  const emojiFromState = stateEmoji || emoji;
  emojiFromState.counter = emojiFromState.counter || 0;
  switch (action.type) {
    case 'i':
      emojiFromState.counter++;
      break;
    case 'd':
      emojiFromState.counter--;
  }
  if (emojiFromState.counter <= 0) emojiFromState.counter = 0;

  if (!stateEmoji) {
    state.push(emojiFromState);
  }

  return state
    .map((rea) => {
      return rea.emoji === emojiFromState.emoji ? emojiFromState : rea;
    })
    .filter((emoji) => emoji.counter !== 0) as IEmoji[];
}

export default function useEmojis(initialEmojis: IEmoji[] = []): UseEmoji {
  const [emojis, dispatch] = useReducer(reducer, [...initialEmojis]);

  const increment: EmojiFN = (emoji) => dispatch({ type: 'i', emoji: emoji });
  const decrement: EmojiFN = (emoji) => dispatch({ type: 'd', emoji: emoji });

  return [emojis, increment, decrement];
}
