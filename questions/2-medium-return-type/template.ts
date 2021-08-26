export type MyReturnType<T>
  = T extends (...args: any) => infer U ? U : never ;
