export type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type GetKey<T, K extends string> = K extends keyof T ? T[K] : never

export type ParsePrintFormat<S extends string, A extends string[] = []> =
  S extends `${infer _}%${infer C}${infer R}`
  ? GetKey<ControlsMap, C> extends never ? ParsePrintFormat<R, A> : ParsePrintFormat<R, [...A, GetKey<ControlsMap, C>]>
  : A
