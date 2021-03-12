export type Pop<T extends any[]> = T extends [...infer I, infer R] ? I : never
