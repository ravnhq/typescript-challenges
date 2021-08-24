type Sign = '-';
export type Absolute<T extends number | string | bigint> = `${T}` extends `${Sign}${infer S}` ? S : `${T}`
