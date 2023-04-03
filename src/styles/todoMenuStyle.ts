import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const PaperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const TodoListPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  background-color: #313233;
  border: 3px solid black;
  max-height: 70vh;
  overflow-y: scroll;
`;
