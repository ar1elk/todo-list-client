import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { Color, colors } from "../datasets/colors";
import { TodoItem } from "../dto's/todoItem";
import { todoColored, todoCompleted, todoRemoved } from "../redux/todosSlice";
import {
  ColorSelection,
  CompleteTodoButton,
  RemoveTodoButton,
  TodoPaper,
  TodoText,
} from "../styles/todoStyles";

export function Todo({
  id,
  text,
  isCompleted,
  color = "",
}: TodoItem & { id: string }) {
  const dispatch = useDispatch();
  return (
    <TodoPaper elevation={0} color={color}>
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
      <TodoText value={text}></TodoText>
      <ColorSelection
        labelId="color-select-label"
        id="color-select"
        value={color}
        label="Color"
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
      <RemoveTodoButton onClick={() => dispatch(todoRemoved(id))} value={color}>
        <ClearIcon fontSize="large" />
      </RemoveTodoButton>
    </TodoPaper>
  );
}
