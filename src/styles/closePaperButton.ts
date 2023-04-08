import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { theme } from "./theme";

export const ClosePaperButton = styled(IconButton)`
  color: ${theme.palette.primary.main};

  &:hover {
    color: ${theme.palette.action.hover};
  }
`;
