import React, { useState, Fragment } from 'react';
import Emoji from './Emoji';

export default function EmojiPicker({
  selectedEmojis,
  availableEmojis,
  onClick,
}) {
  const [open, isOpen] = useState(false);
  const toggleOpen = () => isOpen(!open);

  let i = 0;
  const emojis = availableEmojis
    .filter((e) => !selectedEmojis?.map((e) => e.emoji).includes(e.emoji))
    .map((emoji) => {
      return (
        <Emoji
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
          <Emoji
            emoji={{ emoji: '+', label: 'emoji-plus' }}
            onClick={toggleOpen}
          />
          <EmojiMenu />
        </span>
      )}
    </Fragment>
  );
}
