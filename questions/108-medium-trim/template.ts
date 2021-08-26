export type Trim<S extends string>
= S extends `${' ' | '\n' | '\t'}${infer T}` // trim left side
  ? Trim<T>
  : S extends `${infer T}${' ' | '\n' | '\t'}` // trim rigth side
    ? Trim<T>
    : S
