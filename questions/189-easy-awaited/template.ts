export type Awaited<T> = T extends Promise<infer S> ? S : never
