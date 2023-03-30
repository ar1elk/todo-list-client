import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../../dto's/todoState";

export function onTodoTextUpdated(
  state: TodoState,
  action: Action & { payload: { id: string; text: string } }
): void {
  state.todos[action.payload.id].text = action.payload.text;
}
