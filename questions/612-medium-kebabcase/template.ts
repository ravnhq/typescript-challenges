export type KebabCase<S extends string> = S extends `${infer A}${infer B}`
  ? B extends Uncapitalize<B>
    ? `${Uncapitalize<A>}${KebabCase<B>}`
    : `${Uncapitalize<A>}-${KebabCase<Uncapitalize<B>>}`
  : S

