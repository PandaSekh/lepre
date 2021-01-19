import { EmojiPicker } from '../../dist';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

const emojis = [{ emoji: '🐨', label: 'koala', counter: 0 }];
const EMOJI_SELECTION = [
  { emoji: '🐨', label: 'koala', counter: 0 },
  { emoji: '🦝', label: 'racoon', counter: 0 },
];

describe('EmojiPicker', () => {
  it('is truthy', () => {
    expect(EmojiPicker).toBeTruthy();
  });

  it('render', () => {
    const callback = jest.fn();
    render(
      <EmojiPicker
        selectedEmojis={emojis}
        onClick={callback}
        availableEmojis={EMOJI_SELECTION}
      />,
    );
    expect(screen.queryByText('+')).toBeTruthy();
  });

  it('menu should start closed', () => {
    const callback = jest.fn();
    render(
      <EmojiPicker
        selectedEmojis={emojis}
        onClick={callback}
        availableEmojis={EMOJI_SELECTION}
      />,
    );
    expect(
      screen.getByTestId('emoji-menu').classList.contains('emoji-menu-closed'),
    ).toBeTruthy();
  });

  it('onclick menu should be open', () => {
    const callback = jest.fn();
    render(
      <EmojiPicker
        selectedEmojis={emojis}
        onClick={callback}
        availableEmojis={EMOJI_SELECTION}
      />,
    );
    fireEvent.click(screen.getByText('+'));
    expect(
      screen.getByTestId('emoji-menu').classList.contains('emoji-menu-open'),
    ).toBeTruthy();
  });
});
