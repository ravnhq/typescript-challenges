export type Diff<O, O1> = {[K in Exclude<keyof O1, keyof O>]: O1[K]}
