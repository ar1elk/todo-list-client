import { Action } from "@reduxjs/toolkit";
import { TodoState } from "../../todosSlice";
import { FilterStatus } from "../../../dto's/filterStatus";

export function onPendingFilterSelected(state: TodoState, action: Action) {
  state.filter.status = FilterStatus.Cleared;
}
