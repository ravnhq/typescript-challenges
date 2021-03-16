export type GetRequired<T> = 
  {[K in Exclude<keyof T, undefined> as T[K] extends Required<T>[K] ? K : never]: T[K]}
