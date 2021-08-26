type TrimChar = ' ' | '\n' | '\t'
export type TrimLeft<S extends string> = S extends `${TrimChar}${infer R}`
  ? TrimLeft<R>
  : S
