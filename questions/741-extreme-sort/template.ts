import { Comparator, Comparison } from "../274-extreme-integers-comparator/template"

type Optional<T> = T | null

type TupleRemove<T extends unknown[], E extends unknown, R extends unknown[] = []> =
    T extends [infer H, ...infer Rest]
    ? Equal<H, E> extends true ? [...R, ...Rest] : TupleRemove<Rest, E, [...R, H]>
    : T

type Find<T extends unknown[], F extends Comparison, Num extends Optional<number> = null> =
    T extends [infer H, ...infer Rest]
    ? H extends number ? [Num] extends [number]
    ? Comparator<H, Num> extends F
    ? Find<Rest, F, H> : Find<Rest, F, Num>
    : Find<Rest, F, H> : never
    : Num

type InternalSort<
    T extends number[],
    F extends Comparison,
    R extends number[] = [],
    N extends Optional<number> = Find<T, F>
    > = N extends number
    ? InternalSort<TupleRemove<T, N>, F, [...R, N]>
    : R

export type Sort<T extends number[], Desc extends boolean = false> =
    InternalSort<T, Desc extends true ? Comparison.Greater : Comparison.Lower>
