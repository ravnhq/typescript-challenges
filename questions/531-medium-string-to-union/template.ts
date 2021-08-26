export type StringToUnion<
  T extends string
> = T extends `${infer first}${infer rest}`
  ? first | StringToUnion<rest>
  : never
