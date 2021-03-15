type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never
type Tail<T extends any[]> = ((...t: T) => any) extends ((_:any, ...tail: infer TT) => any) ? TT : []
type HasTail<T extends any[]> = T extends ([] | [any]) ? false : true

type CurryV0<P extends any[], R> = (args0: Head<P>) => HasTail<P> extends true 
  ? CurryV0<Tail<P>, R>
  : R

export declare function Currying<P extends any[], R>(f: (...fn: P) => R): CurryV0<P, R>
