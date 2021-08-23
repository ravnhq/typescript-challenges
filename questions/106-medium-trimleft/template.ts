//export type TrimLeft<S extends string> = any
type Space = ' ' | '\n' | '\t'
export type TrimLeft<S extends string> = S extends `${Space}${infer Rest}` ? TrimLeft<Rest> : S;