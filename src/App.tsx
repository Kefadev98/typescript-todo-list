import "./index.css";
import InputField from "./components/TodosForm/InputField";
import TodoList from "./components/Todos/TodoList";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { TodoContextProvider } from "./context/TodoConext";
import { customTheme } from "./style/extendTheme";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={customTheme}>
        <TodoContextProvider>
          <Heading my="30px" textStyle="h3">
            Taskify
          </Heading>
          <InputField />
          <TodoList />
        </TodoContextProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
