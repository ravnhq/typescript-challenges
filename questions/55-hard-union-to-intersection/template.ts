export type UnionToIntersection<U> =
    (U extends any ? (a: U) => void : never) extends (a: infer T) => void ? T : never
