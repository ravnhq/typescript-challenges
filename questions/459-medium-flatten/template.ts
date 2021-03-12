export type Flatten<T extends any[]> = T extends [infer I, ...infer R] 
  ? I extends any[] 
    ? [...Flatten<I>, ...Flatten<R>]
    : [I, ...Flatten<R>] 
  : T
