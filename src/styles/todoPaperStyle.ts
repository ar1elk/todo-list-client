import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { Color } from "../datasets/colors";

export const TodoPaper = styled(Paper)<{ iscompleted?: number }>`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${(props) => props.color as Color};
  ${(props) =>
    props.iscompleted &&
    `
  text-decoration: line-through;
  text-decoration-color: ${props.color as Color}
  `}
`;
