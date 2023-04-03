import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { draggableItems } from '../draggableItems';
import { TodosDictionary } from "../dto's/todoState";
import { todoAdded } from '../redux/todosSlice';
import { PaperDiv, TodoListPaper } from '../styles/todoMenuStyle';
import { TodoText } from '../styles/todoTextStyle';
import { AddTodo } from './addTodo';
import { TodoList } from './TodoList';

export function TodosMenu(props: { todos: TodosDictionary }) {
  const todos = props.todos;
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [{ isDragging }, drag] = useDrag(() => ({
    type: draggableItems.TODO,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <PaperDiv>
      <TodoListPaper elevation={0}>
        <TodoList
          todos={todos}
          onDrop={() => {
            dispatch(todoAdded(text));
            setText('');
          }}
        ></TodoList>
        <AddTodo />
        <TodoText
          ref={drag}
          multiline
          fullWidth
          borderColor={'white'}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></TodoText>
      </TodoListPaper>
    </PaperDiv>
  );
}
