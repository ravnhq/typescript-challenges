export type MyOmit<T, K> = {
    [Key in Exclude<keyof T, K>]: T[Key]
}
