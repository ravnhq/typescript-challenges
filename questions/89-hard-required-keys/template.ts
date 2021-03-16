export type RequiredKeys<T> = 
  {[K in keyof T as T[K] extends Required<T>[K] ? K : never] : T[K] } extends infer R ? keyof R : never
