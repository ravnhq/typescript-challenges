export type Awaited<T> = T extends Promise<infer response>? response: never

