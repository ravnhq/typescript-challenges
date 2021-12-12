type FalsyValues = 0 | '' | false | readonly [] | { [k: string]: never } | null | undefined

export type AnyOf<T extends readonly any[]> =
    T extends [infer H, ...infer R] ? H extends FalsyValues ? AnyOf<R> : true : false
