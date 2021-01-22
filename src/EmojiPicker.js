import React, { useState, Fragment } from 'react';
import EmojiComponent from './EmojiComponent.js';

export default function EmojiPicker({
  selectedEmojis,
  availableEmojis,
  pickerIcon = '+',
  onClick,
}) {
  const [open, isOpen] = useState(false);
  const toggleOpen = () => isOpen(!open);

  let i = 0;
  const emojis = availableEmojis
    .filter((e) => !selectedEmojis?.map((e) => e.emoji).includes(e.emoji))
    .map((emoji) => {
      return (
        <EmojiComponent
          key={++i}
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
          <EmojiComponent
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
