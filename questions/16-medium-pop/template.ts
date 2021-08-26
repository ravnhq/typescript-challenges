export type Pop<T extends unknown[]> = T extends [...infer X, infer Y] ? X : never
