import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { Fade, FormControl, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Color, colors } from '../datasets/colors';
import { TodoItem } from "../dto's/todoItem";
import {
  todoColored,
  todoCompleted,
  todoRemoved,
  todoTextUpdated,
} from '../redux/todosSlice';
import { ColorInputLabel } from '../styles/colorInputLabelStyle';
import { ColorSelection, defaultColor } from '../styles/colorSelectionStyle';
import { CompleteTodoButton } from '../styles/completeTodoButtonStyle';
import { RemoveTodoButton } from '../styles/removeTodoButtonStyle';
import { TodoPaper } from '../styles/todoPaperStyle';
import { TodoText } from '../styles/todoTextStyle';

export function Todo({
  id,
  text,
  isCompleted,
  color = 'white',
}: TodoItem & { id: string }) {
  const dispatch = useDispatch();
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const fadeOutAnimationTimeout = 500;

  const handleRemoveTodo = () => {
    setShouldFadeOut(true);
  };

  useEffect(() => {
    if (shouldFadeOut) {
      const timer = setTimeout(() => {
        dispatch(todoRemoved(id));
      }, fadeOutAnimationTimeout);
      return () => clearTimeout(timer);
    }
  }, [shouldFadeOut, dispatch, id]);
  return (
    <Fade in={!shouldFadeOut} timeout={fadeOutAnimationTimeout}>
      <TodoPaper elevation={0} color={color} isCompleted={isCompleted ? 1 : 0}>
        <CompleteTodoButton
          onClick={() => dispatch(todoCompleted(id))}
          value={color}
        >
          {isCompleted ? (
            <TaskAltOutlinedIcon fontSize='large' />
          ) : (
            <CircleOutlinedIcon fontSize='large' />
          )}
        </CompleteTodoButton>
        <TodoText
          multiline
          fullWidth
          borderColor={color}
          transparentBorder
          value={text}
          onChange={(e) =>
            dispatch(todoTextUpdated({ id: id, text: e.target.value }))
          }
        ></TodoText>
        <FormControl>
          <ColorInputLabel labelColor={color}>Color</ColorInputLabel>
          <ColorSelection
            labelId='color-select-label'
            id='color-select'
            todoColor={color}
            value={color === defaultColor ? '' : color}
            label='Color'
            MenuProps={{ PaperProps: { style: { maxHeight: '160px' } } }}
            onChange={(e) =>
              dispatch(
                todoColored({
                  id: id,
                  color: (e.target.value || defaultColor) as Color,
                })
              )
            }
          >
            <MenuItem value=''>
              <em>none</em>
            </MenuItem>
            {colors.map((color) => (
              <MenuItem key={color.id} value={color.value}>
                {color.value}
              </MenuItem>
            ))}
          </ColorSelection>
        </FormControl>
        <RemoveTodoButton onClick={handleRemoveTodo} value={color}>
          <ClearIcon fontSize='large' />
        </RemoveTodoButton>
      </TodoPaper>
    </Fade>
  );
}
