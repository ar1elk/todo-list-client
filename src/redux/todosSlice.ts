import { createSlice } from "@reduxjs/toolkit";
import { TodoFilter } from "../dto's/todoFilter";
import { TodoItem } from "../dto's/todoItem";
import { onTodoAdded } from "./reducerLogics/todo/todoAdded";
import { onTodoRemoved } from "./reducerLogics/todo/todoRemoved";
import { FilterStatus } from "../dto's/filterStatus";
import { onTodoCompleted } from "./reducerLogics/todo/todoCompleted";
import { onTodoCleared } from "./reducerLogics/todo/todoCleared";
import { onTodoColored } from "./reducerLogics/todo/todoColored";
import { onAllTodosCompleted } from "./reducerLogics/todo/allTodosCompleted";
import { onAllTodosCleared } from "./reducerLogics/todo/allTodosCleared";

export interface TodoState {
  todos: TodoItem[];
  filter: TodoFilter;
}

const initialState: TodoState = {
  todos: [{ id: 0, text: "My todo", isCompleted: false }],
  filter: {
    status: FilterStatus.All,
    colors: [],
  },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: onTodoAdded,
    todoRemoved: onTodoRemoved,
    todoCompleted: onTodoCompleted,
    todoCleared: onTodoCleared,
    todoColored: onTodoColored,
    allTodosCompleted: onAllTodosCompleted,
    allTodosCleared: onAllTodosCleared
  },
});

export const todosReducer = todosSlice.reducer;
