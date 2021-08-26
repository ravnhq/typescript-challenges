export type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | StringToUnion<R> : never;
