export type TupleToUnion<T> = T extends any[] ? T[number] : never
