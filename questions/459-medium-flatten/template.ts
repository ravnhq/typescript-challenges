export type Flatten<T extends unknown[]>
  = T extends [infer Left, ...infer Right]
    ? ( Left extends unknown[]
      ? [...Flatten<Left>, ...Flatten<Right>]
      : [Left, ...Flatten<Right>])
    : T
