import { TodoFilter } from "./todoFilter";
import { TodoItem } from "./todoItem";

export type TodosDictionary = { [id: string]: TodoItem };
export interface TodoState {
  todos: TodosDictionary;
  filter: TodoFilter;
}
