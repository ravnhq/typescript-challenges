export type TrimLeft<S extends string> = S extends `${' ' | '\n'| '\t'}${infer K}`? TrimLeft<K>: S
