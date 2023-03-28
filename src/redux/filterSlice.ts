import { createSlice } from "@reduxjs/toolkit";
import { onAllTodosFilterSelected } from "./reducerLogics/filter/allTodos";
import { onCompletedTodosFilterSelected } from "./reducerLogics/filter/completedTodos";
import { onPendingTodosFilterSelected } from "./reducerLogics/filter/pendingTodos";
import { initialState } from "./initialState";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    allTodos: onAllTodosFilterSelected,
    completedTodos: onCompletedTodosFilterSelected,
    pendingTodos: onPendingTodosFilterSelected,
  },
});

export const filterReducer = filterSlice.reducer;
