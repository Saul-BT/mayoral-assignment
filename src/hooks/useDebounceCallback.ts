import { useRef } from 'react';

type FunctionWithUnknownArgs = (...args: unknown[]) => void;

const useDebounceCallback = (callback: FunctionWithUnknownArgs, delay = 500) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedCallback = (...args: unknown[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounceCallback;
