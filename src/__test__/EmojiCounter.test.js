import { EmojiCounter } from '../index';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Emoji', () => {
  it('is truthy', () => {
    expect(EmojiCounter).toBeTruthy();
  });

  it('render', () => {
    let i = 0;
    const funct = jest.fn();
    render(
      <EmojiCounter
        key={i++}
        emoji={{ emoji: '🚗', label: 'car' }}
        initialValue={0}
        onClick={funct}
      />,
    );
    expect(screen.getByTestId('emojiCounter')).toBeTruthy();
  });

  it('fire onClick callback', () => {
    const onClick = jest.fn();
    render(
      <EmojiCounter
        emoji={{ emoji: '🚄', label: 'train' }}
        initialValue={0}
        onClick={onClick}
      />,
    );
    fireEvent.click(screen.getByTestId('emojiCounter'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('dispatch an Emoji event', () => {
    const handler = jest.fn();
    document.addEventListener('emoji', handler);
    render(
      <EmojiCounter
        emoji={{ emoji: '🦄', label: 'unicorn' }}
        initialValue={0}
        onClick={handler}
      />,
    );
    fireEvent.click(screen.getByTestId('emojiCounter'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('simulate 10 clicks on Emoji', () => {
    const eventCall = jest.fn();
    document.addEventListener('emoji', eventCall);
    render(
      <EmojiCounter
        emoji={{ emoji: '🐷', label: 'pig', counter: 0 }}
        initialValue={0}
        onClick={eventCall}
      />,
    );
    fireEvent.click(screen.getByTestId('emojiCounter'));
    fireEvent.click(screen.getByTestId('emojiCounter'));
    fireEvent.click(screen.getByTestId('emojiCounter'));
    fireEvent.click(screen.getByTestId('emojiCounter'));
    fireEvent.click(screen.getByTestId('emojiCounter'));
    fireEvent.click(screen.getByTestId('emojiCounter'));
    fireEvent.click(screen.getByTestId('emojiCounter'));
    fireEvent.click(screen.getByTestId('emojiCounter'));
    fireEvent.click(screen.getByTestId('emojiCounter'));
    fireEvent.click(screen.getByTestId('emojiCounter'));
    expect(eventCall).toHaveBeenCalledTimes(10);
  });
});
