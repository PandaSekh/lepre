import Reactions from '../index';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

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

  it('should call onUpdate callback', () => {
    const onUpdate = jest.fn();
    act(() =>
      render(
        <Reactions
          emojis={DEFAULT_EMOJI_OPTIONS}
          selected={[{ emoji: '📞', label: 'cell', counter: 5 }]}
          onUpdate={onUpdate}
        />,
      ),
    );
    act(() => fireEvent.click(screen.getByText('📞')));
    expect(onUpdate).toHaveBeenCalledTimes(2); // First time is after render, second is actually an update
  });
});
