import styled from "@emotion/styled";
import { Color } from "../datasets/colors";
import { IconButton, Paper, Select, TextField } from "@mui/material";

export const CompleteTodoButton = styled(IconButton)`
  color: ${(props) => (props.value || "lime") as Color};
  margin-right: 16px;
`;

export const RemoveTodoButton = styled(IconButton)`
  color: ${(props) => (props.value || "red") as Color};
  margin-left: 10px;
`;

export const TodoText = styled(TextField)`
  &.MuiInputBase-root {
    font-family: Assistant;
    width: fit-content;
  }
  &.MuiInputLabel-root {
    display: none;
  }
  & .MuiInputBase-input {
    font-size: 1.5rem;
    padding: 2px 8px;
  }
  &:hover .MuiOutlinedInput-notchedOutline,
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.value as Color};
  }
  &:not(:hover):not(.Mui-focused) .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }
`;

export const TodoPaper = styled(Paper)`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${(props) => props.color as Color};
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
