export type Diff<O, O1> = keyof O extends keyof O1
  ? Omit<O1, keyof O>
  : Omit<O, keyof O1>
