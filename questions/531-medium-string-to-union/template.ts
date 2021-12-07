type StringToArray<T extends string> =
    T extends `${infer F}${infer Rest}` ? [F, ...StringToArray<Rest>] : []

export type StringToUnion<T extends string> = StringToArray<T>[number]
