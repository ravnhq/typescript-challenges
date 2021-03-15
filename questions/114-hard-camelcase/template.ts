export type CamelCase<S extends string> = S extends `${infer S0}_${infer S2}`
  ? `${Lowercase<S0>}${Capitalize<CamelCase<S2>>}`
  : Lowercase<S>
