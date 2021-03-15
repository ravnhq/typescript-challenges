export type Formats = {
  s : string
  d : number
}

export type Format<T extends string> = T extends `${infer S0}%${infer S1}${infer S2}`
  ? S1 extends keyof Formats
    ? (s1: Formats[S1]) => Format<S2>
    : Format<S2>
  : string
