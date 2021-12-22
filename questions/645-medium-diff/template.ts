type MapObject<O> = { [Key in keyof O]: O[Key] }

export type Diff<T extends {}, U extends {}> =
    MapObject<{ [K in Exclude<keyof T, keyof U>]: T[K] } & { [K in Exclude<keyof U, keyof T>]: U[K] }>

