import React from 'react';
import { EmojiCounter, useEmojis } from 'lepre';

const DEFAULT_EMOJI_OPTIONS = [
  { emoji: '🐼', label: 'panda', counter: 0 },
  { emoji: '🐰', label: 'rabbit', counter: 5 },
  { emoji: '🐨', label: 'koala', counter: 3 },
];
export default function CustomReactions() {
  const [emojis, increment] = useEmojis(DEFAULT_EMOJI_OPTIONS);

  let i = 0;
  const selected = emojis
    .sort((a, b) => (a.emoji > b.emoji ? 1 : -1))
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
      <p>You can customize the reaction block however you want!</p>
      <div className='custom-selection'>{selected}</div>
    </div>
  );
}
