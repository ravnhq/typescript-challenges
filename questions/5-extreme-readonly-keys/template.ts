export type GetReadonlyKeys<T> = keyof {
    [K in keyof T as Equal<{ [_ in K]: T[K] }, { readonly [_ in K]: T[K] }> extends true ? K : never]: 1
}
