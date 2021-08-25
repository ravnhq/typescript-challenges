export type Awaited<T> = T extends Promise<infer key> ? key : never;
