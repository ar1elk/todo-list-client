import { List, ListItem } from '@mui/material';
import { useDrop } from 'react-dnd';
import { draggableItems } from '../draggableItems';
import { TodosDictionary } from "../dto's/todoState";
import { TodoListDiv } from '../styles/todoMenuStyle';
import { Todo } from './todo';

export function TodoList(props: {
  todos: TodosDictionary;
  onDrop: () => void;
}) {
  const { todos, onDrop } = props;
  const [{ isOver }, drop] = useDrop(() => ({
    accept: draggableItems.TODO,
    drop: () => onDrop(),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <TodoListDiv>
      <List ref={drop}>
        {Object.keys(todos).map((id: string) => (
          <ListItem key={id}>
            <Todo id={id} {...todos[id]}></Todo>
          </ListItem>
        ))}
      </List>
    </TodoListDiv>
  );
}
