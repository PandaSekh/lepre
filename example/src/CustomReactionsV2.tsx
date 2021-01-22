import React from 'react';
import { EmojiCounter, useEmojis } from 'lepre';

const DEFAULT_EMOJI_OPTIONS = [
  { emoji: '🐼', label: 'panda', counter: 0 },
  { emoji: '🐰', label: 'rabbit', counter: 5 },
  { emoji: '🐨', label: 'koala', counter: 3 },
  { emoji: '🐬', label: 'dolphin', counter: 13 },
];

export default function CustomReactions() {
  const [emojis, increment] = useEmojis(DEFAULT_EMOJI_OPTIONS);

  const selected = emojis
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
    <div className='comment'>
      <p>
        Mix and match the components and create your personalized Reaction
        Block.
      </p>
      <div
        className='custom-selection'
        style={{ margin: 'auto', width: 'fit-content' }}
      >
        {selected}
      </div>
    </div>
  );
}
