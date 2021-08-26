export declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{[P in keyof T]: T[P] extends Promise<infer X> ? X : T[P]}>
