export type DeepReadonly<T> = {
    readonly [K in keyof T]: keyof T[K] extends undefined ? T[K] : DeepReadonly<T[K]>
}
