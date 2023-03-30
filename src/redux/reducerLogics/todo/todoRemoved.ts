import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../../dto's/todoState";

export function onTodoRemoved(
  state: TodoState,
  action: Action & { payload: string }
): void {
  delete state.todos[action.payload];
}
