export type Pop<T extends any[]> = T extends [...infer H, any] ? H : never
