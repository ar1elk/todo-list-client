import styled from "@emotion/styled";
import { styled as muiStyled } from "@mui/material";
import { Button } from "@mui/material";

export const AddTodoButton = muiStyled(Button)(
  ({ theme }) => `
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.text.primary};
  font-size: 1.1em;
  font-family: Assistant;
  font-weight: 500;
  &:hover {
    background-color: ${theme.palette.action.hover};
  }
`
);

export const AddTodoDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
`;
