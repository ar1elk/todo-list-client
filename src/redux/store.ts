import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { todosReducer } from "./todosSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
