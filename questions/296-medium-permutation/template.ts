export type Permutation<T, K = T> = [T] extends [never] 
  ? [] 
  : K extends infer I 
    ? [I, ...Permutation<Exclude<T, I>>] 
    : []
