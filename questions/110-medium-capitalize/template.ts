export type Capitalize<S extends string> = S extends `${infer char}${infer rest}` ? `${Uppercase<char>}${rest}` : '';
