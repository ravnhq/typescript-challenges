export type Permutation<T, U = T> = [T] extends [never]
    ? []
    : T extends T
    ? [T, ...Permutation<Exclude<U, T>>]
    : never
