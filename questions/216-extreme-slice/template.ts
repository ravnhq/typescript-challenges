type NormalizeIndex<A extends any[], I extends number, Count extends any[] = []> =
    `${I}` extends `-${string}`
    ? `${I}` extends `-${Count['length']}`
    ? A['length']
    : A extends [any, ...infer T] ? NormalizeIndex<T, I, [...Count, any]> : 0
    : I

type SliceIter<A, S, E, Count extends any[] = [], R extends any[] = []> =
    Count['length'] extends E
    ? R
    : A extends [infer H, ...infer T]
    ? SliceIter<T, S, E, [...Count, any], Count['length'] extends S ? [H] : R extends [] ? [] : [...R, H]>
    : R

export type Slice<A extends any[], S extends number = 0, E extends number = A['length']> =
    SliceIter<A, NormalizeIndex<A, S>, NormalizeIndex<A, E>>
