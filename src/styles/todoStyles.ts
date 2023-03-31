import styled from "@emotion/styled";
import {
  IconButton,
  Paper,
  Select,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Color } from "../datasets/colors";

export const CompleteTodoButton = styled(IconButton)`
  color: ${(props) => (props.value || "lime") as Color};
  margin-right: 16px;
`;

export const RemoveTodoButton = styled(IconButton)`
  color: ${(props) => (props.value || "red") as Color};
`;

type TodoTextProps = Omit<TextFieldProps, "borderColor"> & {
  borderColor?: Color;
};

export const TodoText = styled(TextField)<TodoTextProps>`
  & .MuiInputBase-input {
    font-size: 1.5rem;
    font-family: Assistant;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.borderColor as Color};
  }
  & .MuiOutlinedInput-notchedOutline {
    transition: border-color 300ms;
    border-color: transparent;
  }
  max-width: calc(100% - 230px);
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const TodoPaper = styled(Paper)<{ isCompleted?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${(props) => props.color as Color};
  ${(props) =>
    props.isCompleted &&
    `
  text-decoration: line-through;
  text-decoration-color: ${props.color as Color}
  `}
`;

export const ColorSelection = styled(Select)`
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
