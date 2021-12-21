export enum Comparison {
    Greater,
    Equal,
    Lower,
}

type SplitToTuple<S extends string> =
    S extends `${infer H}${infer T}` ? [H, ...SplitToTuple<T>] : []

type TupleTail<T extends any[]> =
    T extends [infer _, infer T] ? T : []

// Compares two tuples length, this works why removing one element every time 
// until one of the tuples is empty (or both in which case this is Comparison.Equal).
// If the first tuple is empty while the other is not, then this is Comparison.Lower
// otherwise Comparison.Greater.  
type CompTupleLen<T extends any[], U extends any[]> =
    T extends [] ? (U extends [] ? Comparison.Equal : Comparison.Lower) :
    U extends [] ? Comparison.Greater : CompTupleLen<TupleTail<T>, TupleTail<U>>

interface Int {
    negative: boolean,
    digits: string[],
}

type NumToInt<N extends number | bigint> =
    `${N}` extends `-${infer P}`
    ? { negative: true, digits: SplitToTuple<P> }
    : { negative: false, digits: SplitToTuple<`${N}`> }

// This reminds me to the function 'S', S(0) = 1, S(S(0)) = 2, ... 
// Successor function: https://en.wikipedia.org/wiki/Successor_function
// But this one only covers the domain from 0 to 8
type Successor = SplitToTuple<'123456789'> & { [_: string]: never }

// The value of 'A' keeps increasing, eventually reaching '9' (or '8' while 'N' is '9')
// There are four stops, if A is equal to B, then both digits are equal, to avoid 
// getting a 'Comparison.Equal' while the value increases we also check if 'N' is 
// equal to 'B' , if that's the case then it's 'Comparison.Lower', if 'A' or 'N' 
// reach '9' before any value gets to be equal to 'N' then 'A' was already greater 
// it's 'Comparison.Greater', if none of the conditionals are met then call this again 
// but with CompTwoDigits<A + 1, B>, i.e. CompTwoDigits<N, B>
type CompTwoDigits<A extends string, B extends string, N extends string = Successor[A]> =
    A extends B ? Comparison.Equal :
    A extends '9' ? Comparison.Greater :
    N extends B ? Comparison.Lower :
    N extends '9' ? Comparison.Greater :
    CompTwoDigits<N, B>

// Compares two tuple digits that are equal in length, some invariants hold because of 
// this, if 'A' is empty, then both must be empty thus Comparison.Equal. 
// If they're not empty, then we compare the first digits, if they're equal, we compare 
// the following digits until they're not equal, or both tuples are empty.
type CompEqLenDigits<A extends string[], B extends string[], FirstComp = CompTwoDigits<A[0], B[0]>> =
    A extends [] ? Comparison.Equal :
    FirstComp extends Comparison.Equal ? CompEqLenDigits<TupleTail<A>, TupleTail<B>> : FirstComp

// Compares two tuple digits with (possibly) different lengths, if both have equal length
// we compare their digits using 'CompEqLenDigits', otherwise return the result of 
// the length comparison. 
type CompDigits<A extends string[], B extends string[], LenComp = CompTupleLen<A, B>> =
    LenComp extends Comparison.Equal ? CompEqLenDigits<A, B> : LenComp

// Compares two 'Int' types, by using sign comparison, if one of the numbers is negative 
// and the other is positive, then we know that this is Comparison.Lower or Comparison.Greater.
// If both numbers are negative we can flip the comparison and compare them as positives, 
// and if both are positive we simply compare them in the order we receive them
type CompInt<A extends Int, B extends Int> =
    A['negative'] extends true
    ? B['negative'] extends false ? Comparison.Lower : CompDigits<B['digits'], A['digits']>
    : B['negative'] extends true ? Comparison.Greater : CompDigits<A['digits'], B['digits']>

export type Comparator<A extends number | bigint, B extends number | bigint> =
    CompInt<NumToInt<A>, NumToInt<B>>

