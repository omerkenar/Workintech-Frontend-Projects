import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const changeValue = (newValue) => {
    try {
      setValue(newValue);
      localStorage.setItem(JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
  };

  return [value, changeValue];
};
