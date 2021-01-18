import React from 'react';
import emojiEvent from './lib/emojiEvent';

export default function Emoji({ emoji, onClick }) {
  return (
    <span
      className='emoji'
      role='img'
      aria-label={emoji.label ? emoji.label : 'Emoji'}
      onClick={() => {
        onClick && onClick();
        document.dispatchEvent(emojiEvent(emoji));
      }}
    >
      {emoji.emoji}
    </span>
  );
}
