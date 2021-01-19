import React from 'react';
import EmojiPicker from './EmojiPicker';
import EmojiCounter from './EmojiCounter';
import useEmojis from './lib/useEmojis';

export default function EmojiBlock(props) {
  const [emojis, increment] = useEmojis();
  let i = 0;
  const mappedReactions = emojis.map((emoji) => (
    <EmojiCounter
      key={i++}
      emoji={emoji}
      initialValue={emoji.counter}
      onClick={increment}
    />
  ));

  return (
    <div className='reaction-div'>
      <div className='reaction-block'>
        {mappedReactions}
        <EmojiPicker
          selectedEmojis={emojis}
          onClick={increment}
          availableEmojis={props.emojis}
        />
      </div>
    </div>
  );
}
