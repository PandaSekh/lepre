const emojiEvent = emoji => {
  const event = new Event('emoji', { bubbles: true });
  event.emoji = emoji;
  return event;
};

export default emojiEvent;
