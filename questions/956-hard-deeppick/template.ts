type UnionToIntersection<U> =
    (U extends any ? (_: U) => any : never) extends (_: infer I) => any ? I : never

type Pick<T, K> = K extends keyof T ? { [Key in K]: T[Key] } : never
type GetKey<T, K> = K extends keyof T ? T[K] : never

type DeepPickUnion<T, K> = K extends K
    ? K extends `${infer F}.${infer R}`
    ? { [Key in F]: DeepPickUnion<GetKey<T, F>, R> }
    : Pick<T, K>
    : never

export type DeepPick<T, K> = UnionToIntersection<DeepPickUnion<T, K>>

type Test = DeepPick<{ a: { b: number, c: number }, d: number }, 'a.b' | 'a.c' | 'd'> 
