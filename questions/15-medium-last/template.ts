export type Last<T extends unknown[]> = T extends [...infer X, infer Y] ? Y : never
