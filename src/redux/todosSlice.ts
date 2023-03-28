import { createSlice } from "@reduxjs/toolkit";
import { onAllTodosCleared } from "./reducerLogics/todo/allTodosCleared";
import { onAllTodosCompleted } from "./reducerLogics/todo/allTodosCompleted";
import { onTodoAdded } from "./reducerLogics/todo/todoAdded";
import { onTodoCleared } from "./reducerLogics/todo/todoCleared";
import { onTodoColored } from "./reducerLogics/todo/todoColored";
import { onTodoCompleted } from "./reducerLogics/todo/todoCompleted";
import { onTodoRemoved } from "./reducerLogics/todo/todoRemoved";
import { initialState } from "./initialState";

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
  },
});

export const todosReducer = todosSlice.reducer;
