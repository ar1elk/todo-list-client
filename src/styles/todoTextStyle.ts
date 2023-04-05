import styled from "@emotion/styled";
import { TextField, TextFieldProps } from "@mui/material";
import { theme } from "./theme";

type TodoTextProps = Omit<TextFieldProps, "borderColor"> & {
  borderColor?: string;
  transparentBorder?: boolean;
  useTheme?: boolean;
};

export const TodoText = styled(TextField, {
  shouldForwardProp: (prop) =>
    prop !== "transparentBorder" &&
    prop !== "useTheme" &&
    prop !== "borderColor",
})<TodoTextProps>`
  & .MuiInputBase-input {
    font-size: 1.5rem;
    font-family: Assistant;
    font-weight: 300;
    color: ${(props: any) =>
      props.useTheme ? theme.palette.primary.main : props.borderColor};
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${(props: any) =>
      props.useTheme ? theme.palette.primary.main : props.borderColor};
  }
  & .MuiOutlinedInput-notchedOutline {
    transition: border-color 300ms;
    border-color: ${(props: any) =>
      props.transparentBorder ? "transparent" : props.borderColor};
  }
  color: ${(props: any) =>
    props.useTheme ? theme.palette.primary.main : props.borderColor};
  width: 400px;
  margin-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
