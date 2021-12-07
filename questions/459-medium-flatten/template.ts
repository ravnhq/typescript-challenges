export type Flatten<A> =
    A extends [infer H, ...infer Rest] ? H extends any[] ? [...Flatten<H>, ...Flatten<Rest>] : [H, ...Flatten<Rest>] : []
