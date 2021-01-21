import React from 'react';
import EmojiBlock from 'lepre';

const DEFAULT_EMOJI_OPTIONS = [
  { emoji: '🐼', label: 'panda' },
  { emoji: '🐰', label: 'rabbit' },
  { emoji: '🐨', label: 'koala' },
  { emoji: '🐬', label: 'dolphin' },
];

function onUpdateExample(state) {
  console.log('State Updated');
  console.log(state);
}

export default function DefaultReactions() {
  return (
    <div className='comment'>
      <div>
        <p>This is a sample comment with the default reaction block.</p>
      </div>
      <EmojiBlock
        emojis={DEFAULT_EMOJI_OPTIONS}
        selected={[{ emoji: '🐼', label: 'panda', counter: 3 }]}
        onUpdate={onUpdateExample}
      />
    </div>
  );
}
