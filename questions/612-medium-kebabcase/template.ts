type Transform<H extends string, R extends string> =
    R extends Uncapitalize<R> ? `${Lowercase<H>}${KebabCase<R>}` : `${Lowercase<H>}-${KebabCase<R>}`

export type KebabCase<S extends string> =
    S extends `${infer H}${infer R}` ? Transform<H, R> : S
