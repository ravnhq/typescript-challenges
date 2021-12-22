type MapObject<O> = { [Key in keyof O]: O[Key] }

export type Merge<F, S> = MapObject<S & { [Key in Exclude<keyof F, keyof S>]: F[Key] }>
