import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdded } from '../redux/todosSlice';
import { AddTodoButton, AddTodoDiv } from '../styles/addTodoButtonStyle';
import { TodoText } from '../styles/todoTextStyle';

export function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <AddTodoDiv>
      <AddTodoButton
        onClick={() => {
          dispatch(todoAdded(text));
          setText('');
        }}
      >
        <AddCircleIcon fontSize='large'></AddCircleIcon>
      </AddTodoButton>
      <TodoText
        multiline
        fullWidth
        borderColor={'white'}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></TodoText>
    </AddTodoDiv>
  );
}
