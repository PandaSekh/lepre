import { EmojiCounter } from '../index';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Emoji', () => {
  it('is truthy', () => {
    expect(EmojiCounter).toBeTruthy();
  });

  it('render', () => {
    const funct = jest.fn();
    render(
      <EmojiCounter
        key={0}
        emoji={{ emoji: '🚗', label: 'car' }}
        onClick={funct}
      />,
    );
    expect(screen.getByTestId('emojiCounter')).toBeTruthy();
  });

  it('render with initial value', () => {
    const funct = jest.fn();
    render(
      <EmojiCounter
        key={5}
        emoji={{ emoji: '🐬', label: 'dolphin' }}
        onClick={funct}
      />,
    );
    expect(screen.getByText('🐬')).toBeTruthy();
  });

  it('render with no onCLick callback', () => {
    render(<EmojiCounter key={10} emoji={{ emoji: '🦍', label: 'gorilla' }} />);
    expect(screen.getByText('🦍')).toBeTruthy();
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
    fireEvent.click(screen.getByText('🚄'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('dispatch an Emoji event', () => {
    const handler = jest.fn();
    render(
      <EmojiCounter
        emoji={{ emoji: '🦄', label: 'unicorn' }}
        initialValue={0}
        onClick={handler}
      />,
    );
    fireEvent.click(screen.getByText('🦄'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('simulate 10 clicks on Emoji', () => {
    const eventCall = jest.fn();
    render(
      <EmojiCounter
        emoji={{ emoji: '🐷', label: 'pig', counter: 0 }}
        initialValue={0}
        onClick={eventCall}
      />,
    );
    fireEvent.click(screen.getByText('🐷'));
    fireEvent.click(screen.getByText('🐷'));
    fireEvent.click(screen.getByText('🐷'));
    fireEvent.click(screen.getByText('🐷'));
    fireEvent.click(screen.getByText('🐷'));
    fireEvent.click(screen.getByText('🐷'));
    fireEvent.click(screen.getByText('🐷'));
    fireEvent.click(screen.getByText('🐷'));
    fireEvent.click(screen.getByText('🐷'));
    fireEvent.click(screen.getByText('🐷'));
    expect(eventCall).toHaveBeenCalledTimes(10);
  });
});
