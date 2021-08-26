type exclude = ' ' | '\n' | '\t';
export type Trim<S extends string> = S extends `${exclude}${infer restR}` ? 
Trim<restR> :S extends `${infer restL}${exclude}` ? Trim<restL>: S
