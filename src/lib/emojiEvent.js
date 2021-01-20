/**
 * @typedef {Object} Emoji - Object containing infos about an emoji
 * @property {string} emoji - The emoji itself
 * @property {string} label - Label of the emoji, used for accessibility reasons
 * @property {number?} counter - Number of times the emoji was selected
 */

/**
 * @param {Emoji} emoji
 * @returns {Event}
 */
const emojiEvent = (emoji) => {
  // eslint-disable-next-line no-undef
  const event = new Event('emoji', { bubbles: true });
  event.emoji = emoji;
  return event;
};

export default emojiEvent;
