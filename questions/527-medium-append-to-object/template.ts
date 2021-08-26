type Merge<T> = T extends object
  ? { [K in keyof T]: T[K] }
  : T

export type AppendToObject<T extends {}, U extends string, V>
  = Merge<
    { [Property in keyof T] : T[Property] }
      &
    { [Property in U] : V}
    > ;
