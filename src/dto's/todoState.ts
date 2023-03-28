import { TodoFilter } from "./todoFilter";
import { TodoItem } from "./todoItem";

export interface TodoState {
  todos: TodoItem[];
  filter: TodoFilter;
}
