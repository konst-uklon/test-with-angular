// types
export type ValuesType = boolean | null;
export type UserItemsArrType = UserItemType[];

// interfaces
export interface UserItemType {
  name: string;
  values: ValuesType[];
  score?: number;
}
