import { useSelector } from "react-redux";
import { TodoList } from "./components/todoList";
import { TodoItem } from "./dto's/todoItem";
import { TodoState } from "./dto's/todoState";

function App() {
  const todos: { [id: string]: TodoItem } = useSelector(
    (state: TodoState) => state.todos
  );
  return (
    <div className="App">
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
