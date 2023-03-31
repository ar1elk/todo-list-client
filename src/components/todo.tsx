import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { FormControl, MenuItem, Fade } from "@mui/material";
import { useDispatch } from "react-redux";
import { Color, colors } from "../datasets/colors";
import { TodoItem } from "../dto's/todoItem";
import {
  todoColored,
  todoCompleted,
  todoRemoved,
  todoTextUpdated,
} from "../redux/todosSlice";
import { useEffect, useState } from "react";
import { TodoPaper } from "../styles/todoPaperStyle";
import { CompleteTodoButton } from "../styles/completeTodoButtonStyle";
import { ColorInputLabel } from "../styles/colorInputLabelStyle";
import { ColorSelection } from "../styles/colorSelectionStyle";
import { RemoveTodoButton } from "../styles/removeTodoButtonStyle";
import { TodoText } from "../styles/todoTextStyle";

export function Todo({
  id,
  text,
  isCompleted,
  color = "",
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
      <TodoPaper elevation={0} color={color} isCompleted={isCompleted}>
        <CompleteTodoButton
          onClick={() => dispatch(todoCompleted(id))}
          value={color}
        >
          {isCompleted ? (
            <TaskAltOutlinedIcon fontSize="large" />
          ) : (
            <CircleOutlinedIcon fontSize="large" />
          )}
        </CompleteTodoButton>
        <TodoText
          multiline
          fullWidth
          borderColor={color}
          value={text}
          onChange={(e) =>
            dispatch(todoTextUpdated({ id: id, text: e.target.value }))
          }
        ></TodoText>
        <FormControl>
          <ColorInputLabel labelColor={color}>Color</ColorInputLabel>
          <ColorSelection
            labelId="color-select-label"
            id="color-select"
            value={color}
            label="Color"
            MenuProps={{ PaperProps: { style: { maxHeight: "160px" } } }}
            onChange={(e) =>
              dispatch(todoColored({ id: id, color: e.target.value as Color }))
            }
          >
            {colors.map((color) => (
              <MenuItem key={color.id} value={color.value}>
                {color.value}
              </MenuItem>
            ))}
          </ColorSelection>
        </FormControl>
        <RemoveTodoButton onClick={handleRemoveTodo} value={color}>
          <ClearIcon fontSize="large" />
        </RemoveTodoButton>
      </TodoPaper>
    </Fade>
  );
}
