export declare function PromiseAll<T extends any[]>(values: readonly [...T]): 
  Promise<{[K in keyof T]: T[K] extends Promise<infer I> ? I : T[K]}>
