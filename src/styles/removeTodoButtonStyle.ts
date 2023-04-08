import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { theme } from "./theme";

export const RemoveTodoButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "buttonColor",
})<{ buttonColor: string }>`
  color: ${(props) => props.buttonColor};
  &:hover {
    color: ${theme.palette.action.hover};
  }
`;
