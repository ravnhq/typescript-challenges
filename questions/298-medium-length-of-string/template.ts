type StringToArray<S> = S extends ''
  ? []
  : S extends `${infer A}${infer B}`
  ? [`${A}`, ...StringToArray<B>]
  : [S]

export type LengthOfString<S extends string> = StringToArray<S>['length']

