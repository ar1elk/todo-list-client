import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { Color } from '../datasets/colors';

export const RemoveTodoButton = styled(IconButton)`
  color: ${(props) => props.value as Color};
`;
