import Reactions from '../index';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';

const DEFAULT_EMOJI_OPTIONS = [
  { emoji: '🐼', label: 'panda' },
  { emoji: '📞', label: 'cell' },
];

describe('Reactions', () => {
  it('is truthy', () => {
    expect(Reactions).toBeTruthy();
  });

  it('render', () => {
    render(<Reactions emojis={DEFAULT_EMOJI_OPTIONS} />);
    expect(screen.getByTestId('reaction-block')).toBeTruthy();
  });

  it('renders with array of selected emojis', () => {
    render(
      <Reactions
        emojis={DEFAULT_EMOJI_OPTIONS}
        selected={[{ emoji: '🐼', label: 'panda', counter: 5 }]}
      />,
    );
    expect(screen.getByTestId('reaction-block')).toBeTruthy();
  });

  it('sort emojis correctly', () => {
    render(
      <Reactions
        emojis={DEFAULT_EMOJI_OPTIONS}
        selected={[{ emoji: '🐼', label: 'panda', counter: 5 }]}
      />,
    );
    expect(screen.getByTestId('emojiCounter').innerHTML).toContain('🐼');
  });
});
