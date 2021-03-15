export type CapitalizeWord<S extends string> = S extends `${infer S0}${infer S1}${infer S2}`
  ? S1 extends ' ' | ',' | '.'
    ? `${S0}${S1}${CapitalizeWord<Capitalize<`${S2}`>>}`
    : `${S0}${S1}${CapitalizeWord<`${S2}`>}`
  : S

export type CapitalizeWords<S extends string> = Capitalize<CapitalizeWord<S>>
