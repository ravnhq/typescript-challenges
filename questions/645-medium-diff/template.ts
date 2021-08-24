export type Diff<O, O1> = {
    [P in Exclude<keyof O1, keyof O>]: O1[P];
}