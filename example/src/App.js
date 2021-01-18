import React from 'react';

import { EmojiBlock } from 'lepre';
import 'lepre/dist/index.css';

const DEFAULT_EMOJI_OPTIONS = [
  { emoji: '🐼', label: 'panda' },
  { emoji: '📞', label: 'cell' },
];

const App = () => {
  return <EmojiBlock emojis={DEFAULT_EMOJI_OPTIONS} />;
};

export default App;
