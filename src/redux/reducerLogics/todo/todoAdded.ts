import { Action } from "@reduxjs/toolkit";
import { TodoItem } from "../../../dto's/todoItem";
import { TodoState } from "../../../dto's/todoState";

function getNextTodoId(todos: TodoItem[]): number {
  return todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
}

export function onTodoAdded(
  state: TodoState,
  action: Action & { payload: string }
): void {
  state.todos.push({
    id: getNextTodoId(state.todos),
    text: action.payload,
    isCompleted: false,
  });
}
