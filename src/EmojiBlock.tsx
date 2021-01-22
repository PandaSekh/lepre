import React, { useEffect } from 'react';
import EmojiPicker from './EmojiPicker';
import EmojiCounter from './EmojiCounter';
import useEmojis from './lib/useEmojis';
import type { IEmoji } from './types';

export default function EmojiBlock({
  emojis,
  selected = [],
  onUpdate,
}: {
  emojis: IEmoji[];
  selected: IEmoji[];
  onUpdate?: (state: IEmoji[]) => void;
}): JSX.Element {
  const [state, increment] = useEmojis([...selected]);

  useEffect(() => {
    if (onUpdate) {
      onUpdate(state);
    }
  }, [state]);

  const mappedReactions = state
    .sort((a, b) => (a.emoji < b.emoji ? 1 : -1))
    .map((emoji, i) => (
      <EmojiCounter
        key={i}
        emoji={emoji}
        initialValue={emoji.counter}
        onClick={increment}
      />
    ));

  return (
    <div className='reaction-block' data-testid='reaction-block'>
      {mappedReactions}
      <EmojiPicker
        selectedEmojis={state}
        onClick={increment}
        availableEmojis={emojis}
      />
    </div>
  );
}
