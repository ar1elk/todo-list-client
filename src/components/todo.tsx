import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { Fade } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TodoItem } from "../dto's/todoItem";
import {
  todoCompleted,
  todoRemoved,
  todoTextUpdated,
} from "../redux/todosSlice";
import { CompleteTodoButton } from "../styles/completeTodoButtonStyle";
import { PushToRightDiv } from "../styles/pushToRightDiv";
import { RemoveTodoButton } from "../styles/removeTodoButtonStyle";
import { TodoPaper } from "../styles/todoPaperStyle";
import { TodoText } from "../styles/todoTextStyle";
import { TodoColorSelection } from "./todoColorSelection";
import { DEFAULT_TODO_COLOR } from "../defaultTodoColor";

export function Todo({
  id,
  text,
  isCompleted,
  color = DEFAULT_TODO_COLOR,
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
          buttonColor={color}
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
          transparentBorder
          value={text}
          onChange={(e) =>
            dispatch(todoTextUpdated({ id: id, text: e.target.value }))
          }
        ></TodoText>
        <PushToRightDiv>
          <TodoColorSelection id={id} />
          <RemoveTodoButton
            buttonColor={color}
            onClick={handleRemoveTodo}
            value={color}
          >
            <ClearIcon fontSize="large" />
          </RemoveTodoButton>
        </PushToRightDiv>
      </TodoPaper>
    </Fade>
  );
}
