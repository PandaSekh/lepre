import React from 'react';
import { EmojiCounter, EmojiPicker, useEmojis } from 'lepre';

const DEFAULT_EMOJI_OPTIONS = [
  { emoji: '🐼', label: 'panda' },
  { emoji: '📞', label: 'cell' },
];
export default function CustomReactions() {
  const [emojis, increment] = useEmojis();

  let i = 0;
  const selected = emojis.map((emoji) => (
    <EmojiCounter
      key={i++}
      emoji={emoji}
      initialValue={emoji.counter}
      onClick={increment}
    />
  ));

  return (
    <div className='comment'>
      <div className='custom-picker'>
        <EmojiPicker
          availableEmojis={DEFAULT_EMOJI_OPTIONS}
          onClick={increment}
          selectedEmojis={emojis}
        />
      </div>
      <p>You can customize the reaction block however you want!</p>
      <div className='custom-selection'>{selected}</div>
    </div>
  );
}
