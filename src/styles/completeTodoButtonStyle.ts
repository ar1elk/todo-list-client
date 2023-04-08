import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const CompleteTodoButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "buttonColor",
})<{ buttonColor: string }>`
  color: ${(props) => props.buttonColor};
  margin-right: 16px;
`;
