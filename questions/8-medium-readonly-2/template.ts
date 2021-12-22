export type MyReadonly2<T extends object, K extends keyof T = keyof T> = T & {
    readonly [Key in K]: T[K]
}
