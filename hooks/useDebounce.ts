import {useEffect, useState} from 'react';

const useDebounce = () => {
  const [value, setValue] = useState(null);
  const [delay, setDelay] = useState(500);
  const [debouncedValue, setDebouncedValue] = useState(null);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(debounce);
  }, [delay, value]);

  return {debouncedValue, setValue, setDelay};
};

export default useDebounce;