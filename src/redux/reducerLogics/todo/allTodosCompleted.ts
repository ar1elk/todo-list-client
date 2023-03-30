import { Action } from "@reduxjs/toolkit";
import { TodoState, TodosDictionary } from "../../../dto's/todoState";

export function onAllTodosCompleted(state: TodoState, action: Action): void {
  state.todos = Object.keys(state.todos).reduce(
    (accumulator: TodosDictionary, key: string) => {
      accumulator[key] = { ...state.todos[key], isCompleted: true };
      return accumulator;
    },
    {}
  );
}
