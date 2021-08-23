export type MyReturnType<T> = T extends (...params: any) => infer U ? U : never;
