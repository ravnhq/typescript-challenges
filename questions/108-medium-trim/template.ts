type exclude = ' ' | '\n' | '\t'

export type Trim<S extends string> = S extends `${exclude}${infer restL}`
  ? Trim<restL>
  : S extends `${infer restR}${exclude}`
  ? Trim<restR>
  : S
