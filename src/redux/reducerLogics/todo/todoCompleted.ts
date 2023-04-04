import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../../dto's/todoState";

export function onTodoCompleted(
  state: TodoState,
  action: Action & { payload: string }
): void {
  const isTodoCompleted: boolean = state.todos[action.payload].isCompleted;
  state.todos[action.payload].isCompleted = !isTodoCompleted;
}
