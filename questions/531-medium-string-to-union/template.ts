export type StringToUnion<T extends string> = T extends ''
  ? never
  : T extends `${infer A}${infer B}`
  ? A | StringToUnion<B>
  : T

type test = StringToUnion<'coronavirus'>
type tes2t = StringToUnion<''>
