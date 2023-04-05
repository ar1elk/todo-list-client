import { useState } from "react";
import { useDispatch } from "react-redux";
import { TodosDictionary } from "../dto's/todoState";
import { PaperDiv, TodoListPaper } from "../styles/todoMenuStyle";
import { TodoText } from "../styles/todoTextStyle";
import { TodoList } from "./TodoList";
import { DragTodo } from "./dragTodo";
import { AddTodoButton, AddTodoDiv } from "../styles/addTodoButtonStyle";
import { todoAdded } from "../redux/todosSlice";
import { theme } from "../styles/theme";

export function TodosMenu(props: { todos: TodosDictionary }) {
  const todos = props.todos;
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [showTodoInput, setShowTodoInput] = useState(false);

  return (
    <PaperDiv>
      <TodoListPaper elevation={0}>
        <TodoList
          todos={todos}
          onDrop={() => {
            setShowTodoInput(true);
          }}
        ></TodoList>
        {showTodoInput && (
          <AddTodoDiv>
            <TodoText
              multiline
              fullWidth
              useTheme={true}
              borderColor={theme.palette.primary.main}
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></TodoText>
            <AddTodoButton
              variant="contained"
              onClick={() => {
                dispatch(todoAdded(text));
                setShowTodoInput(false);
                setText("");
              }}
            >
              Add todo
            </AddTodoButton>
          </AddTodoDiv>
        )}
        <DragTodo onClick={() => setShowTodoInput(true)} />
      </TodoListPaper>
    </PaperDiv>
  );
}
