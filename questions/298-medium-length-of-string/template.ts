export type LengthOfString<S extends String,V extends []> = S extends `${infer otro}${infer rest}` ? : never;
