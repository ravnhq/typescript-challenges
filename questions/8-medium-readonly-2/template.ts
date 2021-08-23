export type MyReadonly2<T, K = keyof T> = {
    readonly [P in keyof T as P extends K ? P : never]: T[P]
} & T