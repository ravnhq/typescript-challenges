export type Flatten<T> = T extends []
  ? T
  : T extends [infer A, ...infer B]
  ? [...Flatten<A>, ...Flatten<B>]
  : [T]

