export type MyOmit<T, K> = {
  [P in Exclude<keyof T, K>]: T[P]
}