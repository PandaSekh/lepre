import React from 'react';
import Emoji from './Emoji';
import { IEmoji } from './types';

export default function EmojiCounter({
  emoji,
  initialValue = 0,
  onClick,
}: {
  emoji: IEmoji;
  initialValue?: number;
  onClick?: (emoji: IEmoji) => void;
}): JSX.Element {
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
