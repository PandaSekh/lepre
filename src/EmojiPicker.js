import React, { useState, Fragment } from 'react';
import Emoji from './Emoji';
import emojiEvent from './lib/emojiEvent';

export default function EmojiAdder({
  selectedEmojis,
  EMOJI_SELECTION,
  onClick,
}) {
  const [open, isOpen] = useState(false);
  const toggleOpen = () => isOpen(!open);

  let i = 0;
  const emojis = EMOJI_SELECTION.filter(
    (e) => !selectedEmojis.map((e) => e.emoji).includes(e.emoji),
  ).map((emoji) => (
    <Emoji
      key={++i}
      emoji={emoji}
      onClick={() => {
        onClick(emoji.emoji);
        toggleOpen();
        document.dispatchEvent(emojiEvent(emoji));
      }}
    />
  ));

  function EmojiMenu() {
    return (
      <div className={open ? 'emoji-menu-open' : 'emoji-menu-closed'}>
        {emojis}
      </div>
    );
  }

  return (
    <Fragment>
      {console.log(emojis.length)}
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
