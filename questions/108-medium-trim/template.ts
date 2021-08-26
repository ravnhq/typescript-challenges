export type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer R}` 
? Trim<R> 
: S extends `${infer R}${' ' | '\t' | '\n'}` 
? Trim<R> 
: S