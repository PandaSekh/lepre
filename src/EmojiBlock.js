import React, { useEffect } from 'react';
import EmojiPicker from './EmojiPicker';
import EmojiCounter from './EmojiCounter';
import useEmojis from './lib/useEmojis';

export default function EmojiBlock({ emojis, selected = [], onUpdate }) {
  const [state, increment] = useEmojis([...selected]);

  useEffect(() => {
    if (onUpdate) {
      onUpdate(state);
    }
  }, [state]);

  let i = 0;
  const mappedReactions = state
    .sort((a, b) => (a.emoji < b.emoji ? 1 : -1))
    .map((emoji) => (
      <EmojiCounter
        key={i++}
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
