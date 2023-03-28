import { createSlice } from "@reduxjs/toolkit";
import { TodoFilter } from "../dto's/todoFilter";
import { TodoItem } from "../dto's/todoItem";
import { onTodoAdded } from "./reducerLogics/todo/todoAdded";
import { onTodoRemoved } from "./reducerLogics/todo/todoRemoved";

export interface TodoState {
  todos: TodoItem[];
  filter: TodoFilter;
}

const initialState: TodoState = {
  todos: [{ id: 0, text: "My todo", isCompleted: false }],
  filter: {
    status: "All",
    colors: [],
  },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: onTodoAdded,
    todoRemoved: onTodoRemoved,
  },
});

export const todosReducer = todosSlice.reducer;
