export type MyReadonly2<T, K extends keyof T> = {
  +readonly [prop in K]: T[prop]
} &
  { [prop in Exclude<keyof T, K>]: T[prop] }
