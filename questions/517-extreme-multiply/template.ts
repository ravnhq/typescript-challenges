import { SumTupleNum } from "../476-extreme-sum/template"
import { Comparator } from "../274-extreme-integers-comparator/template"

enum Comparison {
    Greater,
    Equal,
    Lower,
}

type TupleToString<T extends any[]> =
    T extends [infer H, ...infer R] ? H extends string ? `${H}${TupleToString<R>}` : never : ''

type SplitToTuple<S extends string> =
    S extends `${infer H}${infer T}` ? [H, ...SplitToTuple<T>] : []

type TupleTail<T extends any[]> =
    T extends [infer _, ...infer R] ? R : []

type TuplePop<T extends any[]> =
    T extends [...infer H, infer _] ? H : []

type CompTupleLen<T extends any[], U extends any[]> =
    T extends [] ? (U extends [] ? Comparison.Equal : Comparison.Lower) :
    U extends [] ? Comparison.Greater : CompTupleLen<TupleTail<T>, TupleTail<U>>

type Predecessor = [never, '0', ...SplitToTuple<'123456789'>] & Record<string, never>

type MultiplyDigits<
    A extends string,
    B extends string,
    R extends string[] = ['0'],
    P extends string = Predecessor[B]
    > = B extends '0'
    ? R extends [infer M] ? ['0', M] : R
    : MultiplyDigits<A, P, SumTupleNum<R, [A]>>

type MultiplyTupleNumByDigit<
    A extends string[],
    B extends string,
    E extends string = '0',
    R extends string[] = [],
    LastA extends string = A extends [...infer _, infer L] ? L : '_',
    MulAB extends string[] = MultiplyDigits<LastA, B>,
    MulABSumE extends string[] = E extends '0' ? MulAB : SumTupleNum<MulAB, [E]>,
    > = LastA extends '_'
    ? E extends '0' ? B extends '0' ? '0' : R : [E, ...R]
    : MultiplyTupleNumByDigit<TuplePop<A>, B, MulABSumE[0], [MulABSumE[1], ...R]>

type MultiplyTupleNumNormalized<
    A extends string[],
    B extends string[],
    R extends string[] = ['0'],
    Base extends string[] = [],
    LastB extends string = B extends [...infer _, infer L] ? L : '_',
    > = LastB extends '_'
    ? R
    : MultiplyTupleNumNormalized<A, TuplePop<B>, SumTupleNum<R, [...MultiplyTupleNumByDigit<A, LastB>, ...Base]>, ['0', ...Base]>

type MultiplyTupleNum<A extends string[], B extends string[]> =
    CompTupleLen<A, B> extends Comparison.Lower
    ? MultiplyTupleNumNormalized<B, A>
    : MultiplyTupleNumNormalized<A, B>

export type Multiply<A extends string | number | bigint, B extends string | number | bigint> =
    TupleToString<MultiplyTupleNum<SplitToTuple<`${A}`>, SplitToTuple<`${B}`>>>
