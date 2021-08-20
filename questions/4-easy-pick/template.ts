// Notice that we use K extends keyof T to make sure that we are only passing properties belonging to the type/interface.
export type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}