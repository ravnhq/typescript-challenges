export type KebabCase<S extends string>
  = S extends `${infer before}${infer after}`
    ? after extends Uncapitalize<after> // is lowercase or symbol?
      ? `${Uncapitalize<before>}${KebabCase<after>}` // true lowercase
      : `${Uncapitalize<before>}-${KebabCase<`${Uncapitalize<after>}`>}` // false lowercase
    : S;