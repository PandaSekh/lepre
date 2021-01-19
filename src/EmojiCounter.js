import React from 'react';
import EmojiComponent from './EmojiComponent.js';

export default function EmojiCounter({ emoji, initialValue = 0, onClick }) {
  return (
    <span
      className='emoji-container'
      onClick={onClick ? () => onClick(emoji) : undefined}
      data-testid='emojiCounter'
    >
      <EmojiComponent emoji={emoji} />
      <div>
        <span className='emoji-counter'>{initialValue}</span>
      </div>
    </span>
  );
}
