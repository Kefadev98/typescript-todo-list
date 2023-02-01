import "../../index.css";
import { useRef, useContext } from "react";
import { TodoContext } from "../../context/TodoConext";
import { Input, Button, Flex, Box } from "@chakra-ui/react";

const InputField = () => {
  const todoContext = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex w={"100%"} justifyContent={"center"}>
      <form
        className="input"
        onSubmit={(e) => {
          todoContext.handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <Flex width={"100%"} position={"relative"} alignItems={"center"}>
          <Input
            w={"100%"}
            h={"60px"}
            borderRadius={"50px"}
            fontSize={"1.2rem"}
            border={"none"}
            bg={"gray.100"}
            boxShadow={"2xl"}
            color={"black"}
            _focus={{
              boxShadow: "0 0 10px 1000px rgba(0, 0, 0, 0.5)",
              outline: "none",
            }}
            type="input"
            placeholder="Enter a task"
            value={todoContext.todo}
            onChange={(e) => todoContext.setTodo(e.target.value)}
            ref={inputRef}
          />
          <Button
            bgGradient="linear(to-r, blue.100, pink.300)"
            variant={"solid"}
            position={"absolute"}
            right={"0"}
            m={"12px"}
            borderRadius={"50px"}
            zIndex={"10"}
            type="submit"
            onSubmit={(e) => {
              todoContext.handleAdd(e);
              inputRef.current?.blur();
            }}
          >
            Add
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default InputField;
