export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
>
  = S extends `${infer Before}${From}${infer After}`
    ? From extends ''
      ? S
      : `${Before}${To}${ReplaceAll<After, From, To>}`
    : S
