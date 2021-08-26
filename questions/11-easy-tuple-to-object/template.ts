type TupleToObject<T extends ReadonlyArray<string | number>> = {
  [key in T[number]]: key
}