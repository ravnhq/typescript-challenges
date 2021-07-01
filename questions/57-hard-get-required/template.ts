export type GetRequired<T> = {
    [key in keyof T as T[key] extends Required<T>[key] ? key : never ]:T[key]
}
// comparison T[key] with other