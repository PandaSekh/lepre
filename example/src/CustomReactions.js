import React from 'react';
import { EmojiCounter, EmojiPicker, useEmojis } from 'lepre';

const DEFAULT_EMOJI_OPTIONS = [
  { emoji: '🐼', label: 'panda' },
  { emoji: '🐰', label: 'rabbit' },
  { emoji: '🐨', label: 'koala' },
  { emoji: '🐬', label: 'dolphin' },
];

export default function CustomReactions() {
  const [emojis, increment] = useEmojis([
    { emoji: '🐼', label: 'panda', counter: 10 },
  ]);

  let i = 0;
  const selected = emojis
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
    <div className='comment'>
      <div className='custom-picker'>
        <EmojiPicker
          availableEmojis={DEFAULT_EMOJI_OPTIONS}
          onClick={increment}
          pickerIcon='🎶'
          selectedEmojis={emojis}
        />
      </div>
      <p>You can customize the reaction block however you want!</p>
      <div className='custom-selection'>{selected}</div>
    </div>
  );
}
