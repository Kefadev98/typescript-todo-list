import { useState, useEffect } from "react";

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useLocalStorage = <T,>(
  key: string,
  initialValue?: T
): ReturnType<T> => {
  const [todoStorage, setTodoStorage] = useState<T>(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (todoStorage) {
      try {
        localStorage.setItem(key, JSON.stringify(todoStorage));
      } catch (error) {
        console.log(error);
      }
    }
  }, [todoStorage]);

  return [todoStorage, setTodoStorage];
};
