import styled from "@emotion/styled";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { IconButton, MenuItem, Paper, Select, Typography } from "@mui/material";
import { colors } from "../datasets/colors";
import { TodoItem } from "../dto's/todoItem";

const CompleteTodoButton = styled(IconButton)`
  color: lime;
`;

const TodoText = styled(Typography)`
  font-family: Assistant;
`;

const TodoPaper = styled(Paper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18%;
  padding-right: 9px;
  border: 1px solid #ccc;
`;

const ColorSelection = styled(Select)`
  color: cyan;
  width: 30%;
  height: 30px;
`;

export function Todo({ id, text, isCompleted, color }: TodoItem) {
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
      >
        {colors.map((color) => (
          <MenuItem key={color.id} value={color.value}>
            {color.value}
          </MenuItem>
        ))}
      </ColorSelection>
    </TodoPaper>
  );
}
