import { v4 as uuidv4 } from "uuid";
import { FilterStatus } from "../dto's/filterStatus";
import { TodoState } from "../dto's/todoState";

export const initialState: TodoState = {
  todos: {
    [uuidv4()]: {
      text: "My todo",
      isCompleted: false,
    },
    [uuidv4()]: { text: "My todo2", isCompleted: false },
  },
  filter: {
    status: FilterStatus.All,
    colors: [],
  },
};
