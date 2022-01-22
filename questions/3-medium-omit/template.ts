export type MyOmit<T, K> = {
  [prop in Exclude<keyof T, K>]: T[prop]
}
