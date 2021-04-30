import { TableItem } from "./reducer";
export const LoadTable = (data: TableItem[]) => ({
  type: "LOAD_TABLE",
  payload: data,
});
