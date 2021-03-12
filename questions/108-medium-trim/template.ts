export type Trim<S extends string> = 
  S extends `${' ' | '\n\t'}${infer R}` 
  ? Trim<R> 
  : S extends `${infer R2}${' ' | '\t'}` 
    ? Trim<R2>
    : S 