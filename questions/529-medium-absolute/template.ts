type ToString<T> = T extends number | string | bigint ? `${T}` : never

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export type Absolute<T extends number | string | bigint> =
    ToString<T> extends `${infer F}${infer Rest}` ? F extends Digit ? `${F}${Absolute<Rest>}` : Absolute<Rest> : ''

