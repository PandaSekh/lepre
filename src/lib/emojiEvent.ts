import type { IEmoji } from '../types';

type EmojiEvent = Event & { emoji: IEmoji };
const emojiEvent = (emoji: IEmoji): EmojiEvent => {
  const event: Event & { emoji: IEmoji } = (new Event('emoji', {
    bubbles: true,
  }) as unknown) as EmojiEvent;
  event.emoji = emoji;
  return event;
};

export default emojiEvent;
