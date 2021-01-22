import React from 'react';
import emojiEvent from './lib/emojiEvent';
import { IEmoji } from './types';

export default function Emoji({
  emoji,
  onClick,
}: {
  emoji: IEmoji;
  onClick?: () => void;
}): JSX.Element {
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
