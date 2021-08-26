export type AppendToObject<T, U extends string, V> = {
  [key in keyof T | U]: key extends keyof T ? T[key] : V
}
