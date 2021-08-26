export type Merge<F, S> = {
  [property in keyof F | keyof S] : property extends keyof S
    ? S[property]
    : property extends keyof F
      ? F[property]
      : never
}
