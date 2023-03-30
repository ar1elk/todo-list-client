import styled from "@emotion/styled";
import { List, ListItem, Paper } from "@mui/material";
import { TodosDictionary } from "../dto's/todoState";
import { Todo } from "./todo";

const PaperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TodoListPaper = styled(Paper)`
  width: 50%;
  border: 2px solid #ccc;
  height: 70vh;
`;

export function TodoList(props: { todos: TodosDictionary }) {
  const todos = props.todos;
  return (
    <PaperDiv>
      <TodoListPaper elevation={0}>
        <List>
          {Object.keys(todos).map((id: string) => (
            <ListItem key={id}>
              <Todo id={id} {...todos[id]}></Todo>
            </ListItem>
          ))}
        </List>
      </TodoListPaper>
    </PaperDiv>
  );
}
