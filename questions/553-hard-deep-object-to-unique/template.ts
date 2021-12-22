type MergeObject<T> = {
    [K in keyof T]: T[K]
}

export type DeepObjectToUniq<O extends object> = {
    [K in keyof O]: O[K] extends object ? MergeObject<DeepObjectToUniq<O[K]> & { _uniq?: [O, K] }> : O[K]
}
