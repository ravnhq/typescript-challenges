type PascalCase<S extends string> =
    S extends `${infer W}_${infer R}` ? `${Capitalize<Lowercase<W>>}${PascalCase<R>}` : Capitalize<Lowercase<S>>

export type CamelCase<S extends string> = Uncapitalize<PascalCase<S>>

