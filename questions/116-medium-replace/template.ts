export type Replace<S extends string, From extends string, To extends string> = S extends `${infer F}${From}${infer E}` 
? From extends '' 
? S 
: `${F}${To}${E}` 
: S
