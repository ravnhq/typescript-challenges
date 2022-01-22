export type TupleToObject<T extends readonly any[]> = {
  [element in T[number]]: element
}
