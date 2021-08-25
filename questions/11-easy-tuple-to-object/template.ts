export type TupleToObject<
  T extends readonly [string, string, string, string]
> = {
  [key in T[number]]: key
}
