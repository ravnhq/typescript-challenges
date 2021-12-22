export type GetOptional<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}
