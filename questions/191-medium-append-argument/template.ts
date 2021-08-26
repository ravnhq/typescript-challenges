export type AppendArgument<Fn, A> = Fn extends {
  (...args: [...infer R]): infer T
}
  ? (...args: [...R, A]) => T
  : never
