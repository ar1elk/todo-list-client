import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { Color } from "../datasets/colors";

export const CompleteTodoButton = styled(IconButton)`
  color: ${(props) => props.value as Color};
  margin-right: 16px;
`;
