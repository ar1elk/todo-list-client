import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../../dto's/todoState";
import { Color } from "../../../datasets/colors";

export function onTodoColored(
  state: TodoState,
  action: Action & { payload: { id: string; color: Color } }
): void {
  state.todos[action.payload.id].color = action.payload.color;
}
