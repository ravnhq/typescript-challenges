type Space = ' ' | '\n' | '\t'
export type Trim<S extends string> = S extends `${Space}${infer Rest}` | `${infer Rest}${Space}` ? Trim<Rest> : S;
