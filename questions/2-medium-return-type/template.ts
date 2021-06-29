interface FunctionCallable<R> {
    (...args: any[]): R;
  }
export type MyReturnType<T> = T extends FunctionCallable<infer R> ? R: never;
