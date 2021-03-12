export type Capitalize<S extends string> = S extends '' 
  ? '' 
  : S extends `${infer U}${infer R}` 
    ? `${Uppercase<U>}${R}` 
    : never
