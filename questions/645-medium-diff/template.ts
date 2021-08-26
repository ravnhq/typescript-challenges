export type Diff<O, O1> = {
  [P in keyof O1 as P extends keyof O ? never : P]: O1[P]
}

