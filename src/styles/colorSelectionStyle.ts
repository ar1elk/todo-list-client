import styled from "@emotion/styled";
import { Select } from "@mui/material";
import { Color } from "../datasets/colors";

export const ColorSelection = styled(Select)`
  color: ${(props) => props.value as Color};
  &:focus {
    transition: border-color 100ms;
    outline: 2px solid ${(props) => props.value as Color};
  }
  &.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    transition: border-color 100ms;
    border-color: ${(props) => props.value as Color};
  }
  min-width: 100px;
`;
