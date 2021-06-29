
export type AppendArgument<Fn , A >= Fn extends (...args: infer T)=>infer R ? ( ...args: [...T, A]) => R:never
//=>infer R ? (...args:T) => R :never
// ...args infer other key x
