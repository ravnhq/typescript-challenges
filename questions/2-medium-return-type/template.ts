export type MyReturnType<T extends Function> = 
  T extends (...args:any)=> infer type? type : never
