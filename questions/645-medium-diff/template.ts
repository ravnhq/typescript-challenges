export type Diff<O extends object, O1 extends object> = {
  [property in Prop2Union<O, O1>]: property extends keyof O
    ? O[property]
    : property extends keyof O1
      ? O1[property]
      : never
}

type Prop2Union<T extends object, U extends object>
  = Exclude<keyof T,keyof U> | Exclude<keyof U, keyof T>
