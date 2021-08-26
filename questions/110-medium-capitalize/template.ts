export type Capitalize<S extends string> = S extends '' ? S : S extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : never;
