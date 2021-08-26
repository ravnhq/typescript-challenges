type Spaces = ' ' | '\n' | '\t';
export type Trim<S extends string> = S extends `${Spaces}${infer R}` ? Trim<R> : S extends `${infer R}${Spaces}` ? Trim<R> : S;
