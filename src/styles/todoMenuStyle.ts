import styled from "@emotion/styled";
import { styled as muiStyled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { theme } from "./theme";

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
  background-color: ${theme.palette.background.default};
  border: 3px solid ${theme.palette.primary.main};
  max-height: 70vh;
  width: 700px;
`
);

export const TodoListDiv = styled.div<{ isOver: boolean }>`
  overflow-y: auto;
  min-height: 100px;
  ${(props) =>
    props.isOver &&
    `
  background-color: ${theme.palette.secondary.main};
  `};
  scrollbar-color: ${theme.palette.secondary.main} transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.palette.secondary.main};
    border-radius: 5px;
  }
`;
