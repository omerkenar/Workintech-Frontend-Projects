import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
  const [geceModu, setGeceModu] = useLocalStorage('geceModu', initialValue);

  useEffect(() => {
    geceModu
      ? document.querySelector('.App').classList.add('dark-mode')
      : document.querySelector('.App').classList.remove('dark-mode');
  }, [geceModu]);

  return [geceModu, setGeceModu];
};
