import React from 'react';
import emojiEvent from './lib/emojiEvent';

/**
 * @typedef {Object} Emoji
 * @property {string} emoji - the Emoji itself 😀
 * @property {string} label - the label to identify the Emoji
 * @property {number} counter - counter for the emoji
 */

/**
 * @typedef {Object} Props
 * @property {Emoji} emoji - the Emoji object
 * @property {function?} onClick - optional callback
 */

/**
 *
 * @param {Props} props
 * @returns {React.FunctionComponent}
 */
export default function Emoji({ emoji, onClick }) {
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
