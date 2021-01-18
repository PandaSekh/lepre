import React from 'react';
import Emoji from './Emoji';
import emojiEvent from './lib/emojiEvent';

export default function EmojiCounter({ emoji, initialValue, onClick }) {
  return (
    <span
      className='emoji-container'
      onClick={() => {
        onClick(emoji);
        document.dispatchEvent(emojiEvent(emoji));
      }}
    >
      <Emoji emoji={emoji.emoji} label={emoji.label} />
      <div>
        <span className='emoji-counter'>{initialValue}</span>
      </div>
    </span>
  );
}
