export type Permutation<T, P=T> =
    [T] extends [never]
      ? []
      : P extends P
        ? [P, ...Permutation<Exclude<T, P>>]
        : never
// conditional k extends K, 9 times
// T extends never through false by [T] extends [never]
// https://github.com/type-challenges/type-challenges/issues/614
//export type Permutation<T> = any
