import { styled } from '@mui/material/styles';

export const BodyDiv = styled('div')(
  ({ theme }) => `
  background-color: ${theme.palette.primary.dark};
`
);
