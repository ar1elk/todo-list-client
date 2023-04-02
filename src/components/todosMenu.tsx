import { ListItem, List } from '@mui/material';
import { TodosDictionary } from "../dto's/todoState";
import { PaperDiv, TodoListPaper } from '../styles/todoMenuStyle';
import { AddTodo } from './addTodo';
import { Todo } from './todo';

export function TodosMenu(props: { todos: TodosDictionary }) {
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
        <AddTodo />
      </TodoListPaper>
    </PaperDiv>
  );
}
