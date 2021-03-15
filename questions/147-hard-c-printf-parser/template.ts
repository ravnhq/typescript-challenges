export type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

export type ParsePrintFormat<S extends string> = S extends `${infer S0}%${infer S1}${infer S2}`
  ? S1 extends keyof ControlsMap
    ? [ControlsMap[S1], ...ParsePrintFormat<S2>]
    : ParsePrintFormat<S2>
  :[]
