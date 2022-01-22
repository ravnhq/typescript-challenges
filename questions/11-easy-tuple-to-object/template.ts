type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [K in T[number]]: K
}
