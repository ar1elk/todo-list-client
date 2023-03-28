import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../../dto's/todoState";

export function onAllTodosCleared(state: TodoState, action: Action): void {
  state.todos.map((todoItem) => {
    return { ...todoItem, isCompleted: false };
  });
}
