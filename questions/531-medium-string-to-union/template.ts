export type StringToUnion<T extends string>
  = T extends `${infer char}${infer rest}`
    ? char | StringToUnion<rest>
    : never;
