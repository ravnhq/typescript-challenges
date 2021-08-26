export type Capitalize<S extends string> = S extends `${infer F}${infer R}` 
? `${Uppercase<F>}${R}` 
: S