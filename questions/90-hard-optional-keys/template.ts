export type OptionalKeys<T> = 
  {[K in keyof T as T[K] extends Required<T>[K] ? never : K] : T[K] } extends infer R ? keyof R : never
