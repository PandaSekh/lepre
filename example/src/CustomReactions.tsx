import React from 'react';
import { EmojiCounter, EmojiPicker, useEmojis } from 'lepre';

const DEFAULT_EMOJI_OPTIONS = [
  { emoji: '🐼', label: 'panda' },
  { emoji: '🐰', label: 'rabbit' },
  { emoji: '🐨', label: 'koala' },
  { emoji: '🐬', label: 'dolphin' },
];

export default function CustomReactions() {
  const [emojis, increment] = useEmojis([
    { emoji: '🐼', label: 'panda', counter: 10 },
  ]);

  const selected = emojis
    .sort((a, b) => (a.emoji < b.emoji ? 1 : -1))
    .map((emoji, i) => (
      <EmojiCounter
        key={i}
        emoji={emoji}
        initialValue={emoji.counter}
        onClick={increment}
      />
    ));

  return (
    <div className='comment'>
      <div className='custom-picker'>
        <EmojiPicker
          availableEmojis={DEFAULT_EMOJI_OPTIONS}
          onClick={increment}
          pickerIcon={
            <svg
              id='emoji'
              viewBox='0 0 72 72'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='color'>
                <path
                  fill='none'
                  d='M36,13c-12.6823,0-23,10.3177-23,23c0,12.6822,10.3177,23,23,23c12.6822,0,23-10.3178,23-23 C59,23.3177,48.6822,13,36,13z'
                />
              </g>
              <g id='hair' />
              <g id='skin' />
              <g id='skin-shadow' />
              <g id='line'>
                <circle
                  cx='36'
                  cy='36'
                  r='23'
                  fill='none'
                  stroke='#000000'
                  stroke-miterlimit='10'
                  stroke-width='2'
                />
                <line
                  x1='27'
                  x2='45'
                  y1='43'
                  y2='43'
                  fill='none'
                  stroke='#000000'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-miterlimit='10'
                  stroke-width='2'
                />
                <path d='M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31' />
                <path d='M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31' />
              </g>
            </svg>
          }
          selectedEmojis={emojis}
        />
      </div>
      <p>You can customize the reaction block however you want!</p>
      <div className='custom-selection'>{selected}</div>
    </div>
  );
}
