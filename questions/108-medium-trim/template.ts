type WhiteSpace = ' ' | '\n' | '\t'

export type Trim<S extends string> = S extends `${WhiteSpace}${infer Rest}`
    ? Trim<Rest>
    : S extends `${infer Rest}${WhiteSpace}`
    ? Trim<Rest>
    : S
