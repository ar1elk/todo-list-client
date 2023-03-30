import { Color } from "../datasets/colors";

export interface TodoItem {
  text: string;
  isCompleted: boolean;
  color?: Color | undefined;
}
