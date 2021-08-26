export type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer R ? (...args: [...Args, A]) => R : never;
