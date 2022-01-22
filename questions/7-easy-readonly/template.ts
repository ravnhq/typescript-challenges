export type MyReadonly<T> = {
  +readonly [prop in keyof T]: T[prop]
}
