export type Awaited<T> = T extends Promise<infer T>? T : never ;
