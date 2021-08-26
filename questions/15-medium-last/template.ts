export type Last<T extends unknown[]> = T extends [...infer S, infer L] ? L : never;
