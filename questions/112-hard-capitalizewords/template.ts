type CapitalizeWithSep<S extends string, Sep extends string> =
    S extends `${infer W}${Sep}${infer R}` ? `${Capitalize<W>}${Sep}${CapitalizeWithSep<R, Sep>}` : Capitalize<S>

export type CapitalizeWords<S extends string> =
    CapitalizeWithSep<CapitalizeWithSep<CapitalizeWithSep<S, ' '>, ','>, '.'>
