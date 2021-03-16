export type UnionToTuple<T> = T extends infer R
  ? [R]
  : [{[K in keyof T]: K}]
