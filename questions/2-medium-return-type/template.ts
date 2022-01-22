export type MyReturnType<T> = T extends (...arg: any[]) => infer S ? S : never
