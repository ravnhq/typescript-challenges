export type KebabCase<S extends string> = S extends `${infer L}${infer R}` 
  ? R extends Uncapitalize<R> ? `${Uncapitalize<L>}${KebabCase<R>}` : `${Uncapitalize<L>}-${KebabCase<R>}`
  : S;
