export type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}
// readonly permities do not make mutation
