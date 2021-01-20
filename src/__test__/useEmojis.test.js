import { useEmojis } from '../index';
import { renderHook } from '@testing-library/react-hooks';

describe('useEmojis', () => {
  it('should return empty state with no initial values', () => {
    const { result } = renderHook(() => useEmojis());
    const [emojis] = result.current;
    expect(emojis.length).toBe(0);
  });

  it('should return state with initial values', () => {
    const { result } = renderHook(() =>
      useEmojis([
        { emoji: '🐼', label: 'panda', counter: 0 },
        { emoji: '📞', label: 'cell', counter: 5 },
      ]),
    );
    const [emojis] = result.current;
    expect(emojis.length).toBe(2);
  });

  it('should start counter at 0 if emoji was not in state', () => {
    const { result } = renderHook(() => useEmojis());
    result.current[1]({ emoji: '🐼', label: 'panda' });
    expect(result.current[0][0].counter).toBe(1);
  });

  it('should increment counter', () => {
    const { result } = renderHook(() =>
      useEmojis([{ emoji: '🐼', label: 'panda', counter: 5 }]),
    );
    result.current[1]({ emoji: '🐼', label: 'panda' });
    expect(result.current[0][0].counter).toBe(6);
  });

  it('should decrement counter ', () => {
    const { result } = renderHook(() =>
      useEmojis([{ emoji: '🐼', label: 'panda', counter: 5 }]),
    );
    result.current[2]({ emoji: '🐼', label: 'panda' });
    expect(result.current[0][0].counter).toBe(4);
  });

  it('if counter is zero, it will not return object', () => {
    const { result } = renderHook(() =>
      useEmojis([{ emoji: '🐼', label: 'panda', counter: 1 }]),
    );
    result.current[2]({ emoji: '🐼', label: 'panda' });
    expect(result.current[0].length).toBe(0);
  });

  it('counter should not go below zero', () => {
    const { result } = renderHook(() =>
      useEmojis([{ emoji: '🐼', label: 'panda', counter: 0 }]),
    );
    result.current[2]({ emoji: '🐼', label: 'panda' });
    result.current[1]({ emoji: '🐼', label: 'panda' });
    expect(result.current[0][0].counter).toBe(1);
  });
});
