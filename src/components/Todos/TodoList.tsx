import SingleTodo from "./SingleTodo";
import { TodoContext } from "../../context/TodoConext";
import { useContext } from "react";
import { Flex } from "@chakra-ui/react";

const TodoList = () => {
  const todoContext = useContext(TodoContext);
  return (
    <Flex w={"90%"} justifyContent={"center"}>
      {todoContext.isSmallerThan700 ? (
        <Flex
          w={"100%"}
          bg={"#272727"}
          mt={"20px"}
          direction={"column"}
          p={"15px"}
          borderRadius={"0.5rem"}
        >
          {todoContext.todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} />
          ))}
        </Flex>
      ) : (
        <Flex
          w={"60%"}
          bg={"#272727"}
          mt={"20px"}
          direction={"column"}
          p={"15px"}
          borderRadius={"0.5rem"}
        >
          {todoContext.todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default TodoList;
