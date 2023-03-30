import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../../dto's/todoState";
import { Color } from "../../../datasets/colors";

export function onTodoColored(
  state: TodoState,
  action: Action & { payload: { id: number; color: Color } }
): void {
  state.todos = state.todos.map((todoItem) => {
    if (todoItem.id === action.payload.id) {
      return { ...todoItem, color: action.payload.color };
    }
    return todoItem;
  });
}
