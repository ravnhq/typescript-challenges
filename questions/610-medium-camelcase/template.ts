type Transform<H extends string, R extends string> = `${H}${R extends Capitalize<R> ? `-${CamelCase<R>}` : CamelCase<Capitalize<R>>}`

export type CamelCase<S extends string> = S extends `${infer H}-${infer R}` ? Transform<H, R> : S

