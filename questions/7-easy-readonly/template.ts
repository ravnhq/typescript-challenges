export type MyReadonly<T> = {
  readonly [property in keyof T]: T[property]
}

