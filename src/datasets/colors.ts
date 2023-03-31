import { IdValuePair } from "../dto's/idValuePair";

export type Color =
  | "red"
  | "lime"
  | "yellow"
  | "purple"
  | "cyan"
  | "black"
  | "white"
  | "blue"
  | "maroon"
  | "pink"
  | "";

export const colors: IdValuePair<Color>[] = [
  { id: 0, value: "red" },
  { id: 1, value: "lime" },
  { id: 2, value: "yellow" },
  { id: 3, value: "purple" },
  { id: 4, value: "cyan" },
  { id: 5, value: "black" },
  { id: 6, value: "white" },
  { id: 7, value: "blue" },
  { id: 8, value: "maroon" },
  { id: 9, value: "pink" },
];
