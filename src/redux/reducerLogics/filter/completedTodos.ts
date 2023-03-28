import { Action } from "@reduxjs/toolkit";
import { FilterStatus } from "../../../dto's/filterStatus";
import { TodoState } from "../../../dto's/todoState";

export function onCompletedTodosFilterSelected(
  state: TodoState,
  action: Action
) {
  state.filter.status = FilterStatus.Cleared;
}
