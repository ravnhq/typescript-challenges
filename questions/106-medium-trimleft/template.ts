type exclude=" "|"\n"|"\t";
export type TrimLeft<S extends string> = S extends `${exclude}${infer rest}` ? TrimLeft<rest> : S
