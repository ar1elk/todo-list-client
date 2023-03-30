import styled from "@emotion/styled";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { IconButton, MenuItem, Paper, Select, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Color, colors } from "../datasets/colors";
import { TodoItem } from "../dto's/todoItem";
import { todoColored, todoRemoved } from "../redux/todosSlice";

const CompleteTodoButton = styled(IconButton)`
  color: lime;
  margin-right: 12px;
`;

const RemoveTodoButton = styled(IconButton)`
  color: red;
`;

const TodoText = styled(Typography)`
  font-family: Assistant;
`;

const TodoPaper = styled(Paper)`
  display: flex;
  align-items: center;
  width: 19%;
  border: 1px solid #ccc;
`;

const ColorSelection = styled(Select)`
  color: ${(props) => props.value as Color};
  &:focus {
    outline: 2px solid ${(props) => props.value as Color};
  }

  &.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.value as Color};
  }
  height: 30px;
  margin-left: auto;
`;

export function Todo({ id, text, isCompleted, color = "" }: TodoItem) {
  const dispatch = useDispatch();
  return (
    <TodoPaper elevation={0}>
      <CompleteTodoButton>
        {isCompleted ? (
          <TaskAltOutlinedIcon fontSize="large" />
        ) : (
          <CircleOutlinedIcon fontSize="large" />
        )}
      </CompleteTodoButton>
      <TodoText variant="h4">{text}</TodoText>
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
      <RemoveTodoButton onClick={() => dispatch(todoRemoved(id))}>
        <ClearIcon fontSize="large" />
      </RemoveTodoButton>
    </TodoPaper>
  );
}
