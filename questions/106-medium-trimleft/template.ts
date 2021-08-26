export type TrimLeft<S extends string>
  = S extends `${' '|'\n'|'\t'}${infer T}` ? TrimLeft<T> : S ;
