import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../todosSlice";

export function onTodoCleared(
  state: TodoState,
  action: Action & { payload: number }
): void {
  state.todos.map((todoItem) => {
    if (todoItem.id === action.payload)
      return { ...todoItem, isCompleted: false };
    return todoItem;
  });
}
