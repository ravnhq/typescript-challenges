export type FilterOut<T extends any[], F> = T extends [infer H, ...infer T]
    ? [H] extends [F] ? FilterOut<T, F> : [H, ...FilterOut<T, F>] : []

