export type Diff<O, O1> = {
    [key in (Exclude<keyof O,(keyof O & keyof O1)> | Exclude<keyof O1,(keyof O & keyof O1)>) ]:key extends keyof O ? O[key]:key extends keyof O1? O1[key] :never
}