export type KebabCase<S extends string> = S extends `${infer START}${infer MID}${infer END}` 
  ? MID extends `${Lowercase<MID>}`
    ? `${Lowercase<START>}${KebabCase<`${MID}${END}`>}`
    : `${Lowercase<START>}-${KebabCase<`${Lowercase<MID>}${END}`>}`
  : S
