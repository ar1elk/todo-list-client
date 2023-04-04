import styled from '@emotion/styled';
import { styled as muiStyled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { theme } from './theme';

export const PaperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const TodoListPaper = muiStyled(Paper)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.secondary.dark};
  border: 3px solid ${theme.palette.primary.main};
  max-height: 70vh;
  width: 700px;

  // Hide scrollbar when not needed
  &::-webkit-scrollbar {
    display: none;
  }
`
);

export const TodoListDiv = styled.div<{ isOver: boolean }>`
  overflow-y: scroll;
  min-height: 100px;
  ${(props) =>
    props.isOver &&
    `
  background-color: ${theme.palette.secondary.main};
  `};
`;
