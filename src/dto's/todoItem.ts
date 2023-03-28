export type Color = "red" | "green" | "yellow" | "purple" | "cyan";

export interface TodoItem {
  id: number;
  text: string;
  isCompleted: boolean;
  color?: Color;
}
