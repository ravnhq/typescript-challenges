type CreateValue<T, U> = T extends U ? T : T extends [...infer R] ? [...R, U] : [T, U]
type FlattenObject<T> = { [K in keyof T]: T[K] }

type MergeKeyValues<R, K extends string, V> =
    K extends keyof R
    ? { [Key in keyof R]: K extends Key ? CreateValue<R[Key], V> : R[Key] }
    : FlattenObject<R & { [_ in K]: V }>

type ParseKeyValue<R, P extends string> =
    P extends `${infer K}=${infer V}`
    ? MergeKeyValues<R, K, V extends '' ? true : V>
    : P extends '' ? R : MergeKeyValues<R, P, true>

export type ParseQueryString<S extends string, Res = {}> =
    S extends `${infer P}&${infer R}`
    ? ParseQueryString<R, ParseKeyValue<Res, P>> : ParseKeyValue<Res, S>