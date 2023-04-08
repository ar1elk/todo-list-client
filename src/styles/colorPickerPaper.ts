import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { theme } from "./theme";

export const ColorPickerPaper = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${theme.palette.background.default};
  border: 3px solid ${theme.palette.secondary.main};
  width: 500px;
  height: 500px;
`;
