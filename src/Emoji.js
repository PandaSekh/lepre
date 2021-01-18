import React from 'react';
import emojiEvent from './lib/emojiEvent';

export default function Emoji({ emoji, label, onClick }) {
  return (
    <span
      className='emoji'
      role='img'
      aria-label={label && label}
      aria-hidden={!label}
      onClick={onClick}
    >
      {emoji}
    </span>
  );
}
