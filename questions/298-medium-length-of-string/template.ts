export type LengthOfString<S extends string, A extends string[] = []> =
    S extends `${infer F}${infer Rest}` ? LengthOfString<Rest, [F, ...A]> : A['length']
