export type UnionToIntersection<T> = 
  (T extends any ? (k: T) => any : never) extends ((k: infer I) => any) ? I : never;
