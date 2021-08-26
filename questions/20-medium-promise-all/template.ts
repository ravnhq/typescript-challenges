//Compiler problem es5 -> es2015 solved

export declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T],
): Promise<
  {
    [key in keyof T]: T[key] extends Promise<infer U> ? U : T[key]
  }
>
