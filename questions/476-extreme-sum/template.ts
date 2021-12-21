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

type TenToEighteen = ['10', '11', '12', '13', '14', '15', '16', '17', '18']
type Successor = [...SplitToTuple<'123456789'>, ...TenToEighteen] & Record<string, never>
type Predecessor = [never, '0', ...SplitToTuple<'123456789'>] & Record<string, never>

// Returns the result number in tuple form:
// 1 + 2 = ['3']
// 9 + 6 = ['1', '5']
type SumDigits<
    A extends string,
    B extends string,
    P extends string = Predecessor[B],
    N extends string = Successor[A],
    > = B extends '0'
    ? A extends `${infer E}${infer R}` ? R extends '' ? ['0', E] : [E, R] : never
    : SumDigits<N, P>

// Sums two tuple form numbers, but expects that the first argument A has greater or 
// equal length to the length of B, i.e. A.length >= B.length
type SumTupleNumNormalized<
    A extends string[],
    B extends string[],
    E extends string = '0',
    R extends string[] = [],
    LastA extends string = A extends [...infer _, infer L] ? L : '_',
    LastB extends string = B extends [...infer _, infer L] ? L : '0',
    SumAB extends string[] = SumDigits<LastA, LastB>,
    SumABE extends string[] = E extends '0' ? SumAB : SumTupleNumNormalized<SumAB, [E]>
    > = LastA extends '_'
    ? E extends '0' ? R : [E, ...R]
    : SumTupleNumNormalized<TuplePop<A>, TuplePop<B>, SumABE[0], [SumABE[1], ...R]>

// Sums two tuple form numbers by calling SumTupleNumNormalized, with the correct order 
// of arguments
type SumTupleNum<A extends string[], B extends string[]> =
    CompTupleLen<A, B> extends Comparison.Lower
    ? SumTupleNumNormalized<B, A>
    : SumTupleNumNormalized<A, B>

export type Sum<A extends string | number | bigint, B extends string | number | bigint> =
    TupleToString<SumTupleNum<SplitToTuple<`${A}`>, SplitToTuple<`${B}`>>>

