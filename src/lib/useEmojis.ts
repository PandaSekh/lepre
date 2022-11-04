import { useReducer } from 'react';
import type {
  EmojiAction,
  EmojiFN,
  EmojiiState,
  FullIEmoji,
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

  if (!stateEmoji) {
    state.push(emojiFromState);
  }

  return state
    .map((rea) => {
      return (
        rea.emoji === emojiFromState.emoji ? emojiFromState : rea
      ) as FullIEmoji;
    })
    .filter((emoji) => emoji.counter > 0) as FullIEmoji[];
}

export default function useEmojis(initialEmojis: IEmoji[] = []): UseEmoji {
  const [emojis, dispatch] = useReducer(reducer, [
    ...initialEmojis,
    /* Forces correct typing of state, but still accepts inital state without counter. */
  ] as FullIEmoji[]);
  const increment: EmojiFN = (emoji) => dispatch({ type: 'i', emoji });
  const decrement: EmojiFN = (emoji) => dispatch({ type: 'd', emoji });
  return [emojis, increment, decrement];
}
