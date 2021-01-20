import { Emoji } from '../index';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Emoji', () => {
  it('is truthy', () => {
    expect(Emoji).toBeTruthy();
  });

  it('render', () => {
    render(<Emoji emoji={{ emoji: '🚗', label: ' car' }} />);
    expect(screen.queryByText('🚗')).toBeTruthy();
  });

  it('render without a label', () => {
    render(<Emoji emoji={{ emoji: '🐯' }} />);
    expect(screen.queryByText('🐯').getAttribute('aria-label')).toEqual(
      'Emoji',
    );
  });

  it('fire onClick callback', () => {
    const handleClick = jest.fn();
    render(
      <Emoji emoji={{ emoji: '🚄', label: 'train' }} onClick={handleClick} />,
    );
    fireEvent.click(screen.getByText('🚄'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('dispatch an Emoji event', () => {
    const handler = jest.fn();
    document.addEventListener('emoji', handler);
    render(<Emoji emoji={{ emoji: '🚄', label: 'train' }} />);
    fireEvent.click(screen.getByText('🚄'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('simulate 10 clicks on Emoji', () => {
    const handler = jest.fn();
    document.addEventListener('emoji', handler);
    render(<Emoji emoji={{ emoji: '🐶', label: 'dog' }} />);
    fireEvent.click(screen.getByText('🐶'));
    fireEvent.click(screen.getByText('🐶'));
    fireEvent.click(screen.getByText('🐶'));
    fireEvent.click(screen.getByText('🐶'));
    fireEvent.click(screen.getByText('🐶'));
    fireEvent.click(screen.getByText('🐶'));
    fireEvent.click(screen.getByText('🐶'));
    fireEvent.click(screen.getByText('🐶'));
    fireEvent.click(screen.getByText('🐶'));
    fireEvent.click(screen.getByText('🐶'));
    expect(handler).toHaveBeenCalledTimes(10);
  });
});
