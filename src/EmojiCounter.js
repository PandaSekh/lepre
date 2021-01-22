import React from 'react';
import Emoji from './Emoji.js';

export default function EmojiCounter({ emoji, initialValue = 0, onClick }) {
  return (
    <span className='emoji-container' data-testid='emojiCounter'>
      <Emoji
        emoji={emoji}
        onClick={onClick ? () => onClick(emoji) : undefined}
      />
      <div>
        <span className='emoji-counter'>{initialValue}</span>
      </div>
    </span>
  );
}
