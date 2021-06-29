export type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}
