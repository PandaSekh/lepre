import React from 'react';

import EmojiBlock from 'lepre';

const DEFAULT_EMOJI_OPTIONS = [
  { emoji: '🐼', label: 'panda' },
  { emoji: '📞', label: 'cell' },
];

const Reactions = () => {
  return <EmojiBlock emojis={DEFAULT_EMOJI_OPTIONS} />;
};

export default Reactions;
