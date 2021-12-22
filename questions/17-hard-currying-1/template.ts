type Curry<Args extends any[], Ret> = Args extends [infer F, ...infer Rest]
    ? (...args: [F]) => Curry<Rest, Ret> : Ret

export declare function Currying<T>(fn: T):
    T extends (...args: infer Args) => infer R ? Curry<Args, R> : never