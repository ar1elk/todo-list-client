import styled from "@emotion/styled";
import { InputLabel } from "@mui/material";
import { Color } from "../datasets/colors";

export const ColorInputLabel = styled(InputLabel, {
  shouldForwardProp: (prop) => prop !== "labelColor",
})<{ labelColor: Color }>`
  color: ${(props: any) => props.labelColor};
  &.Mui-focused {
    color: ${(props: any) => props.labelColor};
  }
`;
