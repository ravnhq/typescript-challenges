export type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends '' ?  S : S extends `${infer R}${From}${infer L}` ? `${R}${To}${L}` : S;
