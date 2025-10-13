import { useRef } from "react";

function useDebounceCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const debouncedFn = (...args: any[]) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(function () {
      callback(...args);
    }, delay);
  };
  return debouncedFn;
}

export default useDebounceCallback;
