import { IdValuePair } from "../dto's/idValuePair";

export type Color = "red" | "lime" | "yellow" | "purple" | "cyan" | "";

export const colors: IdValuePair<Color>[] = [
  { id: 0, value: "red" },
  { id: 1, value: "lime" },
  { id: 2, value: "yellow" },
  { id: 3, value: "purple" },
  { id: 4, value: "cyan" },
];
