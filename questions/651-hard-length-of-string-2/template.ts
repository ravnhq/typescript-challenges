type s = string

export type LengthOfString<S extends string, Count extends any[] = []> =
    S extends `${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${infer Rest10}`
    ? LengthOfString<Rest10, [...Count, any, any, any, any, any, any, any, any, any, any]>
    : S extends `${s}${infer Rest}` ? LengthOfString<Rest, [...Count, any]> : Count['length']
