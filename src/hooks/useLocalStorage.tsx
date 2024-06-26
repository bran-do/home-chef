import { useState } from 'react';

function useLocalStorage(key: string, initialValue?: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error: any) {
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error: any) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
