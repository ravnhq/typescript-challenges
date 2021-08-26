export type MyReadonly<T> = {
  readonly [k in keyof T]: T[k]
}
