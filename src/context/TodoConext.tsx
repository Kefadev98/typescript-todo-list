import { createContext, useState } from "react";
import { Todo } from "../components/ModelTypes/model";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useMediaQuery } from "@chakra-ui/react";

interface TodosContextProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleAdd: (e: React.FormEvent) => void;
  isSmallerThan700: boolean;
}

interface TodoContextProviderProps {
  children: React.ReactNode;
}

export const TodoContext = createContext({} as TodosContextProps);

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useLocalStorage<Todo[]>("todosList", []);
  const [isSmallerThan700] = useMediaQuery(["(max-width: 700px)"]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        setTodos,
        handleAdd,
        isSmallerThan700,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
