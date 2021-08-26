export type CamelCase<S extends string> = S extends `${infer A}-${infer B}`
  ? B extends Capitalize<B>
    ? `${A}-${CamelCase<B>}`
    : `${A}${CamelCase<Capitalize<B>>}`
  : S

