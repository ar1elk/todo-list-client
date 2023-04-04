import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { onAllTodosCleared } from "./reducerLogics/todo/allTodosCleared";
import { onAllTodosCompleted } from "./reducerLogics/todo/allTodosCompleted";
import { onTodoAdded } from "./reducerLogics/todo/todoAdded";
import { onTodoColored } from "./reducerLogics/todo/todoColored";
import { onTodoCompleted } from "./reducerLogics/todo/todoCompleted";
import { onTodoRemoved } from "./reducerLogics/todo/todoRemoved";
import { onPendingTodosFilterSelected } from "./reducerLogics/filter/pendingTodos";
import { onCompletedTodosFilterSelected } from "./reducerLogics/filter/completedTodos";
import { onAllTodosFilterSelected } from "./reducerLogics/filter/allTodos";
import { onTodoTextUpdated } from "./reducerLogics/todo/todoTextUpdated";

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: onTodoAdded,
    todoRemoved: onTodoRemoved,
    todoCompleted: onTodoCompleted,
    todoColored: onTodoColored,
    todoTextUpdated: onTodoTextUpdated,
    allTodosCompleted: onAllTodosCompleted,
    allTodosCleared: onAllTodosCleared,
    allTodosFilterSelected: onAllTodosFilterSelected,
    completedTodosFilterSelected: onCompletedTodosFilterSelected,
    pendingTodosFilterSelected: onPendingTodosFilterSelected,
  },
});

export const {
  todoAdded,
  todoRemoved,
  todoCompleted,
  todoColored,
  todoTextUpdated,
  allTodosCompleted,
  allTodosCleared,
  allTodosFilterSelected,
  completedTodosFilterSelected,
  pendingTodosFilterSelected,
} = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
