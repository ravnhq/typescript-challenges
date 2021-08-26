export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer X}${From}${infer Y}`
    ? `${X}${ReplaceAll<`${To}${Y}`, From, To>}`
    : S
