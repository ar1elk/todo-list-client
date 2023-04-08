import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../../dto's/todoState";

export function onTodoColored(
  state: TodoState,
  action: Action & { payload: { id: string; color: string } }
): void {
  state.todos[action.payload.id].color = action.payload.color;
}
