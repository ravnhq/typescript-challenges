// https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-inference-in-conditional-types
export type AppendArgument<Fn, A> = Fn extends (...args: infer P) => infer R ? (...args2: [...P, A]) => R : never
