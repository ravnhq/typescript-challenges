type TupleToObject<T extends readonly string[]> = {
    readonly [K in T[number]as Capitalize<K>]: K
}

type TupleToObjectIndexed<T extends readonly any[], Count extends any[] = []> =
    T extends readonly [infer H, ...infer R] ? {
        readonly [K in (H & string) as Capitalize<K>]: Count['length']
    } & TupleToObjectIndexed<R, [...Count, any]> : {}

type MergeObject<T> = { [K in keyof T]: T[K] }

export type Enum<T extends readonly string[], N extends boolean = false> =
    N extends false ? TupleToObject<T> : MergeObject<TupleToObjectIndexed<T>>
