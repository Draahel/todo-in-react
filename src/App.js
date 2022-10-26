import { AppUI } from "./components/AppUI/AppUI";
import { TodoProvider } from "./TodoContext";

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
