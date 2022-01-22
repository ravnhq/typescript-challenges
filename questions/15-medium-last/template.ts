export type Last<T extends any[]> = T extends [...any,infer last]? last : never
