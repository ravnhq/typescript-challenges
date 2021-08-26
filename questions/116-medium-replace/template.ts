export type Replace<
  S extends string,
  From extends string,
  To extends string
>
  = S extends `${infer Before}${From}${infer After}`
      ? From extends ''
        ? S
        : `${Before}${To}${After}`
      : S ;
