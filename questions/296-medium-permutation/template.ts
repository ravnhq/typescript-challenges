//[T] extends [never] to stop it being distributive.
//K extends K to apply N! tuples 
export type Permutation<T, K = T> =
    [T] extends [never]
    ? []
    : K extends K
    ? [K, ...Permutation<Exclude<T, K>>]
    : never;