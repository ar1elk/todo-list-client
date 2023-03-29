import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { onAllTodosCleared } from "./reducerLogics/todo/allTodosCleared";
import { onAllTodosCompleted } from "./reducerLogics/todo/allTodosCompleted";
import { onTodoAdded } from "./reducerLogics/todo/todoAdded";
import { onTodoCleared } from "./reducerLogics/todo/todoCleared";
import { onTodoColored } from "./reducerLogics/todo/todoColored";
import { onTodoCompleted } from "./reducerLogics/todo/todoCompleted";
import { onTodoRemoved } from "./reducerLogics/todo/todoRemoved";
import { onPendingTodosFilterSelected } from "./reducerLogics/filter/pendingTodos";
import { onCompletedTodosFilterSelected } from "./reducerLogics/filter/completedTodos";
import { onAllTodosFilterSelected } from "./reducerLogics/filter/allTodos";

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
    allTodosCleared: onAllTodosCleared,
    allTodosFilterSelected: onAllTodosFilterSelected,
    completedTodosFilterSelected: onCompletedTodosFilterSelected,
    pendingTodosFilterSelected: onPendingTodosFilterSelected,
  },
});

export const todosReducer = todosSlice.reducer;
