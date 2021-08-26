export type Absolute<T extends number | string | bigint>
  = T extends number | bigint
    ? Absolute<`${T}`>
    : T extends `${'-'}${infer num}`
      ? `${num}`
      : T extends `${infer num}`
        ? `${num}`
        : T
