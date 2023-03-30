import { Action } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { TodoState } from "../../../dto's/todoState";

export function onTodoAdded(
  state: TodoState,
  action: Action & { payload: string }
): void {
  state.todos[uuidv4()] = { text: action.payload, isCompleted: false };
}
