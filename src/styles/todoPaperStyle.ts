import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { Color } from '../datasets/colors';

export const TodoPaper = styled(Paper)<{ isCompleted?: number }>`
  display: flex;
  align-items: center;
  background-color: #313233;
  border: 1px solid ${(props: any) => props.color as Color};
  ${(props: any) =>
    props.isCompleted &&
    `
  text-decoration: line-through;
  text-decoration-color: ${props.color as Color}
  `}
`;
