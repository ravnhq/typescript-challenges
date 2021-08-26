export type Last<T extends any[]> = T extends [...any, infer K] ? K : never;
