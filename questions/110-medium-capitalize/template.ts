export type Capitalize<S extends string>
  = S extends `${infer C}${infer T}` ? `${Uppercase<C>}${T}` : S ;
