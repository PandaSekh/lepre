import React from 'react';
import emojiEvent from './lib/emojiEvent';
import { EmojiObject } from './types';

type Props = {
  emoji: EmojiObject;
  onClick?: Function;
};

export default function Emoji({ emoji, onClick }: Props) {
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
