export type MyOmit<T, K> = {
  [key in Exclude<keyof T,K>]: T[key]
}
