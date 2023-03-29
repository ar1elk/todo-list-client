import { Color } from "../datasets/colors";

export interface TodoItem {
  id: number;
  text: string;
  isCompleted: boolean;
  color?: Color | undefined;
}
