import styled from "@emotion/styled";
import { Backdrop, IconButton } from "@mui/material";
import { theme } from "./theme";

export const SelectColorButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "buttonColor",
})<{ buttonColor: string }>`
  color: ${(props) => props.buttonColor};
  &:hover {
    color: ${theme.palette.action.hover};
  }
`;

export const ColorPickerBackdrop = styled(Backdrop)`
  z-index: 1000;
`;
