import styled from "@emotion/styled";
import { TextField, TextFieldProps } from "@mui/material";
import { Color } from "../datasets/colors";

type TodoTextProps = Omit<TextFieldProps, "borderColor"> & {
  borderColor?: Color;
};

export const TodoText = styled(TextField)<TodoTextProps>`
  & .MuiInputBase-input {
    font-size: 1.5rem;
    font-family: Assistant;
    color: ${(props) => props.borderColor as Color};
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.borderColor as Color};
  }
  & .MuiOutlinedInput-notchedOutline {
    transition: border-color 300ms;
    border-color: transparent;
  }
  max-width: calc(100% - 250px);
  margin-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
