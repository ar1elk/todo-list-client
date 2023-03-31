import styled from "@emotion/styled";
import { InputLabel } from "@mui/material";
import { Color } from "../datasets/colors";

export const ColorInputLabel = styled(InputLabel)<{ labelcolor: Color }>`
  color: ${(props) => props.labelcolor as Color};
  &.Mui-focused {
    color: ${(props) => props.labelcolor as Color};
  }
`;
