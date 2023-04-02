import "./App.css";
import Form from "./Components/Form/Form";
import { useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Button, Stack } from "@chakra-ui/react";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;

  return (
    <Stack spacing={5} className="App">
      <Button
        onClick={() => setIsFormVisible(!isFormVisible)}
        width="150px"
        className="toggleForm"
      >
        Toggle Form
      </Button>
      {isFormVisible ? <Form /> : <Dashboard />}
    </Stack>
  );
}

export default App;
