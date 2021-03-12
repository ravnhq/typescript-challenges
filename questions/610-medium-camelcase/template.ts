export type CamelCase<S extends string> = S extends `${infer START}${'-'}${infer U}${infer END}`
  ? `${'-'}${U}` extends `${'-'}${Uppercase<U>}`
    ? `${START}${'-'}${CamelCase<`${Uppercase<U>}${END}`>}`
    : `${START}${CamelCase<`${Uppercase<U>}${END}`>}`
  : S
