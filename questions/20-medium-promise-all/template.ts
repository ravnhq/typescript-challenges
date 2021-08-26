export declare function PromiseAll<T extends unknown[]>(
  args: readonly [...T],
): Promise<{ [P in keyof T]: T[P] extends Promise<infer X> ? X : T[P] }>

//must change es6 compiler to work
