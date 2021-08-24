export type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
    ? First | StringToUnion<Rest>
    : never;
