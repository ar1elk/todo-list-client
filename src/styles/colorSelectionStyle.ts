import styled from "@emotion/styled";
import { Select } from "@mui/material";
import { Color } from "../datasets/colors";

export const defaultColor: Color = "grey";

export const ColorSelection = styled(Select)<{ todocolor?: Color }>`
  color: ${(props) => props.todocolor};
  &:focus {
    transition: border-color 100ms;
    outline: 2px solid ${(props) => props.todocolor};
  }
  &.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    transition: border-color 100ms;
    border-color: ${(props) => props.todocolor};
  }
  min-width: 100px;
`;
