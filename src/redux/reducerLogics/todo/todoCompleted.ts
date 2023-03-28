import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../todosSlice";

export function onTodoCompleted(
  state: TodoState,
  action: Action & { payload: number }
): void {
  state.todos.map((todoItem) => {
    if (todoItem.id === action.payload) {
      return { ...todoItem, isCompleted: true };
    }
    return todoItem;
  });
}
