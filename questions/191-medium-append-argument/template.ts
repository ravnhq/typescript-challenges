export type AppendArgument<Fn, A> = Fn extends (...args: infer ARG) => infer T ? (...args: [...ARG, A]) => T : never;
