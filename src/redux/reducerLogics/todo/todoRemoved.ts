import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../todosSlice";

export function onTodoRemoved(
  state: TodoState,
  action: Action & { payload: number }
): void {
  state.todos = state.todos.filter(
    (todoItem) => todoItem.id !== action.payload
  );
}
