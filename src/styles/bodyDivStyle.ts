import { styled } from "@mui/material/styles";

export const BodyDiv = styled("div")(
  ({ theme }) => `
  background-color: ${theme.palette.background.default};
  position: relative;
  z-index: 1;
`
);
