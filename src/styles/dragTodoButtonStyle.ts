import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';

export const DragTodoButton = muiStyled(IconButton)(
  ({ theme }) => `
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.secondary.dark};
  height: 50px;
  width: 50px;
  &:hover {
    background-color: ${theme.palette.secondary.main};
  }
`
);

export const DragTodoDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-left: auto;
  padding-top: 10px;
  padding-right: 16px;
  padding-bottom: 8px;
`;
