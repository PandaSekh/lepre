import { useEmojis } from '../index';
import { act, renderHook } from '@testing-library/react-hooks';

/**
 * We can't destructure the reducer, so we have to use it's indexes instead.
 */
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
    act(() => {
      result.current[1]({ emoji: '🐼', label: 'panda' });
    });
    expect(result.current[0][0].counter).toBe(1);
  });

  it('should not break if counter starts below 0', () => {
    const { result } = renderHook(() =>
      useEmojis([{ emoji: '🐈', label: 'cat', counter: -10 }]),
    );
    const [, incr] = result.current;
    act(() => {
      incr({ emoji: '🐈', label: 'cat' });
    });
    expect(result.current[0].length).toBe(0);
  });

  it('should display emoji if counter goes over 0', () => {
    const { result } = renderHook(() =>
      useEmojis([{ emoji: '🐈', label: 'cat', counter: -3 }]),
    );
    const [, incr] = result.current;
    act(() => {
      incr({ emoji: '🐈', label: 'cat' });
      incr({ emoji: '🐈', label: 'cat' });
      incr({ emoji: '🐈', label: 'cat' });
      incr({ emoji: '🐈', label: 'cat' });
    });
    expect(result.current[0].length).toBe(1);
  });

  it('should increment counter', () => {
    const { result } = renderHook(() =>
      useEmojis([{ emoji: '🐼', label: 'panda', counter: 5 }]),
    );
    act(() => {
      result.current[1]({ emoji: '🐼', label: 'panda' });
    });
    expect(result.current[0][0].counter).toBe(6);
  });

  it('should decrement counter ', () => {
    const { result } = renderHook(() =>
      useEmojis([{ emoji: '🐼', label: 'panda', counter: 5 }]),
    );
    act(() => {
      result.current[2]({ emoji: '🐼', label: 'panda' });
    });
    expect(result.current[0][0].counter).toBe(4);
  });

  it('if counter is zero, it will not return object', () => {
    const { result } = renderHook(() =>
      useEmojis([{ emoji: '🐼', label: 'panda', counter: 1 }]),
    );
    act(() => {
      result.current[2]({ emoji: '🐼', label: 'panda' });
    });
    expect(result.current[0].length).toBe(0);
  });

  it('counter should not go below zero', () => {
    const { result } = renderHook(() =>
      useEmojis([{ emoji: '🐼', label: 'panda', counter: 0 }]),
    );
    act(() => {
      result.current[2]({ emoji: '🐼', label: 'panda' });
      result.current[1]({ emoji: '🐼', label: 'panda' });
    });
    expect(result.current[0][0].counter).toBe(1);
  });

  it('should filter correctly emojis if they were already in state', () => {
    const { result } = renderHook(() =>
      useEmojis([{ emoji: '🐼', label: 'panda', counter: 4 }]),
    );
    const [emojis, incr, decr] = result.current;
    act(() => {
      incr({ emoji: '🐶', label: 'dog' });
      decr({ emoji: '🐼', label: 'panda' });
    });
    expect(emojis[0].counter).toBe(3);
    expect(emojis[1].counter).toBe(1);
  });
});
