import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const AddTodoButton = styled(Button)`
  &:hover {
    background-color: red;
  }
`;

export const AddTodoDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
`;
