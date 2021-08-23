export type Replace<
  S extends string,
  From extends string,
  To extends string
  > = From extends '' ? S : S extends `${infer first}${From}${infer rest}` ? `${first}${To}${rest}` : S;