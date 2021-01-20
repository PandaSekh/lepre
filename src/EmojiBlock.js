import React from 'react';
import EmojiPicker from './EmojiPicker';
import EmojiCounter from './EmojiCounter';
import useEmojis from './lib/useEmojis';

export default function EmojiBlock({ emojis, selected = [] }) {
  const [state, increment] = useEmojis([...selected]);
  let i = 0;
  const mappedReactions = state.map((emoji) => (
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
