import { Comparator, Comparison } from "../274-extreme-integers-comparator/template"

type Decrement<T extends any[]> =
    T extends [infer _, ...infer Rest] ? Rest : []

type Increment<T extends any[]> = [any, ...T]
type MakeTuple<N extends number, R extends any[] = []> =
    R['length'] extends N ? R : MakeTuple<N, Increment<R>>

// Max number of steps we can do before reaching recursion limit
type MaxSteps = MakeTuple<40>

interface PartialRange {
    index: any[],
    range: number[],
}

type LimitedRange<
    Idx extends any[], // current index
    Limit extends number, // max length
    Power extends any[] = MaxSteps, // available "power"
    Range extends number[] = [],
    > = Power extends []
    ? { index: Idx, range: Range }
    : Idx['length'] extends Limit
    ? { index: Idx, range: Range }
    : LimitedRange<Increment<Idx>, Limit, Decrement<Power>, [...Range, Idx['length']]>

type GetLowerIdx<L extends number, R extends any[] = []> =
    R['length'] extends L ? R : GetLowerIdx<L, LimitedRange<R, L>['index']>

type LimitedRangeCasted<Idx extends any[], Limit extends number, R = LimitedRange<Idx, Limit>> =
    R extends PartialRange ? R : never

type RangeFrom<
    Idx extends any[],
    Higher extends number,
    Range extends number[] = [],
    Partial extends PartialRange = LimitedRangeCasted<Idx, Higher>,
    > = Idx['length'] extends Higher
    ? [...Range, Idx['length']]
    : RangeFrom<Partial['index'], Higher, [...Range, ...Partial['range']]>

export type InclusiveRange<Lower extends number, Higher extends number> =
    Comparator<Lower, Higher> extends Comparison.Greater
    ? []
    : RangeFrom<GetLowerIdx<Lower>, Higher>
