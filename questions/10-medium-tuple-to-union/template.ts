export type TupleToUnion<T> = T extends Array<unknown> ? T[number] : never ;
