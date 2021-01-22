import React from 'react';
import Emoji from './Emoji';
import { EmojiObject } from './types';

type EmojiCounterProps = {
  emoji: EmojiObject;
  initialValue?: number;
  onClick?: Function;
};

export default function EmojiCounter({
  emoji,
  initialValue = 0,
  onClick,
}: EmojiCounterProps) {
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
