import React from 'react';
import Emoji from './Emoji';

export default function EmojiCounter({ emoji, initialValue, onClick }) {
  return (
    <span className='emoji-container' onClick={() => onClick(emoji)}>
      <Emoji emoji={emoji} />
      <div>
        <span className='emoji-counter'>{initialValue}</span>
      </div>
    </span>
  );
}
