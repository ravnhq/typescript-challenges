export type Awaited<I> =
    I extends Promise<infer G>
    ?G
    :never

