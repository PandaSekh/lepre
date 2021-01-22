import React, { useState, Fragment } from 'react';
import Emoji from './Emoji';
import type { IEmoji } from './types';

export default function EmojiPicker({
  selectedEmojis,
  availableEmojis,
  pickerIcon = '+',
  onClick,
}: {
  selectedEmojis: IEmoji[];
  availableEmojis: IEmoji[];
  pickerIcon?: string | JSX.Element;
  onClick: (emoji: IEmoji) => void;
}): JSX.Element {
  const [open, isOpen] = useState(false);
  const toggleOpen = () => isOpen(!open);

  const emojis = availableEmojis
    .filter((e) => !selectedEmojis?.map((e) => e.emoji).includes(e.emoji))
    .map((emoji, i) => {
      return (
        <Emoji
          key={i}
          emoji={emoji}
          onClick={() => {
            onClick(emoji);
            toggleOpen();
          }}
        />
      );
    });

  function EmojiMenu() {
    return (
      <div
        className={open ? 'emoji-menu-open' : 'emoji-menu-closed'}
        data-testid='emoji-menu'
      >
        {emojis}
      </div>
    );
  }

  return (
    <Fragment>
      {emojis.length > 0 && (
        <span className='emoji-adder' onClick={toggleOpen}>
          <Emoji
            emoji={{
              emoji: pickerIcon,
              label: 'emoji-plus',
            }}
          />
          <EmojiMenu />
        </span>
      )}
    </Fragment>
  );
}
