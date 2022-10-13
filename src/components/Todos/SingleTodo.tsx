import React from "react";
import { Todo } from "../ModelTypes/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { TodoContext } from "../../context/TodoConext";
import { useContext } from "react";
import { Input, Text, Flex } from "@chakra-ui/react";

interface Props {
  todo: Todo;
}

const SingleTodo = ({ todo }: Props) => {
  const todoContext = useContext(TodoContext);
  const [edit, setEdit] = useState<boolean>(false);

  //Kada kliknemo na edit, pojavi se input sa vrijednosti todo.todo
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    todoContext.setTodos(
      todoContext.todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    todoContext.setTodos(todoContext.todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    todoContext.setTodos(
      todoContext.todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form onSubmit={(e) => handleEdit(e, todo.id)}>
      <Flex
        borderRadius={"5px"}
        p={"20px"}
        mt={"15px"}
        bgGradient="linear(to-r, #fffefe, #b8b5b5)"
      >
        {edit ? (
          <Input
            fontWeight={"bold"}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            ref={inputRef}
          />
        ) : todo.isDone ? (
          <Text as="del" flex={"1"} fontSize={"1.2rem"} mt={"5px"}>
            {todo.todo}
          </Text>
        ) : (
          <Text flex={"1"} fontSize={"1.2rem"} mt={"5px"}>
            {todo.todo}
          </Text>
        )}

        <Flex mt={"5px"} mr={"5px"}>
          <Text
            bg={"transparent"}
            fontSize={"1.4rem"}
            cursor={"pointer"}
            onClick={() => {
              setEdit((prevState) => !prevState);
            }}
          >
            <AiFillEdit />
          </Text>
          <Text
            bg={"transparent"}
            fontSize={"1.4rem"}
            cursor={"pointer"}
            mx={"20px"}
            onClick={() => handleDelete(todo.id)}
          >
            <AiFillDelete />
          </Text>
          <Text
            bg={"transparent"}
            fontSize={"1.4rem"}
            cursor={"pointer"}
            onClick={() => handleDone(todo.id)}
          >
            <MdOutlineDone />
          </Text>
        </Flex>
      </Flex>
    </form>
  );
};

export default SingleTodo;
