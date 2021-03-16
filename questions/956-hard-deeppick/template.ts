export type DeepPick2<T, S extends string> = S extends `${infer S0}.${infer S1}`
  ? {[K in keyof T as K extends S0 ? K : never]: DeepPick2<T[K], S1>}
  : S extends ''
    ? unknown
    : {[K in keyof T as K extends S ? K : never]: T[K]}

export type UnionToIntersection<T> =  
  (T extends any ? (k: T) => any : never) extends ((k: infer I) => any) ? I : never;
  
export type DeepPick<T, S extends string> = UnionToIntersection<DeepPick2<T, S>>
