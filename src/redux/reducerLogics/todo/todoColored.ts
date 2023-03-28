import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../todosSlice";
import { Color } from "../../../dto's/todoItem";

export function onTodoColored(
  state: TodoState,
  action: Action & { payload: { id: number; color: Color } }
): void {
  state.todos.map((todoItem) => {
    if (todoItem.id === action.payload.id) {
      return { ...todoItem, color: action.payload.color };
    }
    return todoItem;
  });
}
