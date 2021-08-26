export type Capitalize<S extends string> = S extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : S;
