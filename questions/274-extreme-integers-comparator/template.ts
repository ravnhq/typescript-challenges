export enum Comparison {
  Greater,
  Equal,
  Lower,
}

type ComparatorR<A extends number, B extends number, Arr extends any[] = []> = A extends B
  ? Comparison.Equal
  : Arr['length'] extends A
    ? Comparison.Lower
    : Arr['length'] extends B
      ? Comparison.Greater
      : ComparatorR<A, B, [any, ...Arr]>

type isNegative<N extends number> = `${N}` extends `${infer A}${infer B}`
  ? A extends `-`
    ? true
    : false
  : never

type ComparatorNegativeR<A extends number, B extends number, Arr extends any[] = []> = A extends B
  ? Comparison.Equal
  : `-${Arr['length']}` extends `${A}`
    ? Comparison.Greater
    : `-${Arr['length']}`  extends `${B}`
      ? Comparison.Lower
      : ComparatorNegativeR<A, B, [any, ...Arr]>

export type Comparator <A extends number, B extends number> = isNegative<A> extends true
  ? isNegative<B> extends true
    ? ComparatorNegativeR<A, B>
    : Comparison.Lower
  : isNegative<B> extends true
    ? Comparison.Greater
    : ComparatorR<A,B>

type askdnklasd6 = Comparator<-1, -5>
type askdnklasd7 = Comparator<-6, -5>
type askdnklasd8 = Comparator<-5, -5>

