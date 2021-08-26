export type Merge<F, S> = {
  [Key in keyof F | keyof S]: Key extends keyof S
    ? S[Key]
    : Key extends keyof F
    ? F[Key]
    : never
}
