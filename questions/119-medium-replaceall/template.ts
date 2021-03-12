export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends '' 
  ? S 
  : S extends `${infer START}${From}${infer END}` 
    ? `${START}${To}${ReplaceAll<END, From, To>}`
    : S
