type TrimChar = ' ' | '\n' | '\t'

export type Trim<S> = S extends `${TrimChar}${infer R}`
  ? Trim<R>
  : S extends `${infer Q}${TrimChar}`
  ? Trim<Q>
  : S

