export type FilterOut<T extends any[], F> = T extends [infer T0, ...infer T1] 
  ? [T0] extends [F]
    ? FilterOut<T1, F>
    : [T0, ...FilterOut<T1, F>]
  : []

type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]
