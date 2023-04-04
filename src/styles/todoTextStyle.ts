import styled from "@emotion/styled";
import { TextField, TextFieldProps } from "@mui/material";
import { Color } from "../datasets/colors";

type TodoTextProps = Omit<TextFieldProps, "borderColor"> & {
  borderColor?: Color;
  transparentBorder?: boolean;
};

export const TodoText = styled(TextField)<TodoTextProps>`
  & .MuiInputBase-input {
    font-size: 1.5rem;
    font-family: Assistant;
    color: ${(props: any) => props.borderColor as Color};
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${(props: any) => props.borderColor as Color};
  }
  & .MuiOutlinedInput-notchedOutline {
    transition: border-color 300ms;
    border-color: ${(props: any) =>
      props.transparentBorder ? "transparent" : props.borderColor};
  }
  color: ${(props: any) => props.color};
  max-width: fit-content;
  margin-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
