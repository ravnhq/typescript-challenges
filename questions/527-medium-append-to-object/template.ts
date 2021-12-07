type MapObject<O> = { [Key in keyof O]: O[Key] }

export type AppendToObject<T extends { [x: string]: unknown }, U extends string, V> =
    MapObject<T & { [Key in U]: V }>