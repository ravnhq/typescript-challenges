export type Flatten<T> = T extends [infer I, ...infer R] 
? I extends any[] 
? [...Flatten<I>, ...Flatten<R>] : [I, ...Flatten<R>] : []
