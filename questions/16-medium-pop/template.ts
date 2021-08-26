export type Pop<T extends unknown[]> = T extends [...infer S, infer L] ? S : never;
