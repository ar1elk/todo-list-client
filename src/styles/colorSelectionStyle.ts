import styled from "@emotion/styled";
import { Select } from "@mui/material";
import { Color } from "../datasets/colors";

export const defaultColor: Color = "white";

export const ColorSelection = styled(Select, {
  shouldForwardProp: (prop) => prop !== "todoColor",
})<{ todoColor?: Color }>`
  color: ${(props: any) => props.todoColor};
  &:focus {
    transition: border-color 100ms;
    outline: 2px solid ${(props: any) => props.todoColor};
  }
  &.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    transition: border-color 100ms;
    border-color: ${(props: any) => props.todoColor};
  }
  min-width: 100px;
  margin-right: auto;
`;
