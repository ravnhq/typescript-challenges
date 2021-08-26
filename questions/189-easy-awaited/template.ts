export type Awaited<T> = T extends Promise<infer X> ? X : never

