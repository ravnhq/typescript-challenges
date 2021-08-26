export type AppendArgument<Fn, A>
  = Fn extends (...args: infer U) => infer res
    ? (...args: [...U , A]) => res
    : never
