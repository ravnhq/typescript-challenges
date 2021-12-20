type Multiply10<T extends any[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]

type DigitToNumber<T extends string | number, R extends any[] = []> =
    `${T}` extends `${R['length']}` ? R : DigitToNumber<T, [any, ...R]>

export type ToNumber<S extends string, R extends any[] = []> =
    S extends `${infer H}${infer T}` ? ToNumber<T, [...Multiply10<R>, ...DigitToNumber<H>]> : R['length']

