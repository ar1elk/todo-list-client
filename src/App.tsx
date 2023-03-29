import { useSelector } from "react-redux";
import { Todo } from "./components/todo";
import { TodoState } from "./dto's/todoState";

function App() {
  const todo = useSelector((state: TodoState) => state.todos[0]);
  return (
    <div className="App">
      <Todo {...todo}></Todo>
    </div>
  );
}

export default App;
