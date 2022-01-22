export type Last<T extends any[]> = T extends [...any, infer B] ? B : never
