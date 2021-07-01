export declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [key in keyof T]: T[key] extends Promise<infer R> ? R : T[key]
}>