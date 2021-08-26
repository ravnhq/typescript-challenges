export type CamelCase<S extends string> = S extends `${infer L}-${infer R}` 
  ? R extends Capitalize<R> ? `${L}-${CamelCase<R>}` : `${L}${CamelCase<Capitalize<R>>}` 
  : S;