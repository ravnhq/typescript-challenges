export type Capitalize<S extends string> = S extends `${infer T}${infer R}`
  ? `${Uppercase<T>}${R}`
  : S

