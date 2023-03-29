import { FilterStatus } from "../dto's/filterStatus";
import { TodoState } from "../dto's/todoState";

export const initialState: TodoState = {
  todos: [
    {
      id: 0,
      text: "My todo",
      isCompleted: false,
    },
  ],
  filter: {
    status: FilterStatus.All,
    colors: [],
  },
};
