export type TWhiteSpace = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${TWhiteSpace}${infer R}`
  ? TrimLeft<R>
  : S