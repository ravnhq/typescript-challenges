export type CamelCase<S extends string> =
    S extends `${infer Head}-${infer Letter}${infer Rest}`
    ? Letter extends Capitalize<Letter>
    ? `${Head}-${CamelCase<`${Letter}${Rest}`>}`
    : `${Head}${CamelCase<`${Capitalize<Letter>}${Rest}`>}`
    : S;