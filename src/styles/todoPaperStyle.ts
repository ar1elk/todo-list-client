import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { theme } from "./theme";

export const TodoPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isCompleted",
})<{ isCompleted?: number }>`
  display: flex;
  align-items: center;
  background-color: ${theme.palette.background.default};
  width: 700px;
  border: 1px solid ${(props: any) => props.color};
  ${(props: any) =>
    props.isCompleted &&
    `
  text-decoration: line-through;
  text-decoration-color: ${props.color}
  `}
`;
