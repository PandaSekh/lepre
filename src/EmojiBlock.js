import React, { useState } from 'react';
import EmojiPicker from './EmojiPicker';
import EmojiCounter from './EmojiCounter';

export default function EmojiBlock(props) {
  const [emojis, setEmojis] = useState([]);

  function updateEmojiCount(emoji) {
    let emojiFromState = emojis.filter((em) => em.emoji === emoji.emoji)[0];
    if (!emojiFromState) {
      emojiFromState = props.emojis.filter((em) => em.emoji === emoji)[0];
      emojiFromState.counter = 1;
      setEmojis((emojis) =>
        [...emojis, emojiFromState].sort((a, b) =>
          a.counter < b.counter ? 1 : -1,
        ),
      );
    } else {
      emojiFromState.counter++;
      setEmojis((emojis) =>
        [
          ...emojis.filter((rea) => rea.emoji !== emojiFromState.emoji),
          emojiFromState,
        ].sort((a, b) => (a.counter < b.counter ? 1 : -1)),
      );
    }
  }

  let i = 0;
  const mappedReactions = emojis.map((emoji) => (
    <EmojiCounter
      key={i++}
      emoji={emoji}
      initialValue={emoji.counter}
      onClick={updateEmojiCount}
    />
  ));

  return (
    <div className='reaction-div'>
      <div className='reaction-block'>
        {mappedReactions}
        <EmojiPicker
          selectedEmojis={emojis}
          onClick={updateEmojiCount}
          EMOJI_SELECTION={props.emojis}
        />
      </div>
    </div>
  );
}
