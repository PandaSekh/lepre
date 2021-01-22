import { EmojiObject } from '../types';

const emojiEvent = (emoji: EmojiObject) => {
  // eslint-disable-next-line no-undef
  const event = new Event('emoji', { bubbles: true });
  event.emoji = emoji;
  return event;
};

export default emojiEvent;
