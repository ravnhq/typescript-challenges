export type Capitalize<S extends string> = S extends `${infer H}${infer R}` ? `${Uppercase<H>}${R}` : S