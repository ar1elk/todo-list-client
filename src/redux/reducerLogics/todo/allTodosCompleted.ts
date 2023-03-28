import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../todosSlice";

export function onAllTodosCompleted(state: TodoState, action: Action): void {
  state.todos.map((todoItem) => {
    return { ...todoItem, isCompleted: true };
  });
}
