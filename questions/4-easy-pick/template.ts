export type MyPick<T, K extends keyof T> = {
  [prop in K]: T[prop]
}
