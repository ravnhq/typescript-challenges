export type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' 
? S 
: S extends `${infer first}${From}${infer rest}` 
? `${first}${To}${ReplaceAll<rest, From, To>}` 
: S