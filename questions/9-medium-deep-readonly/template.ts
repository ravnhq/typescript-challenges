type Primitive =
| null
| undefined
| string
| number
| boolean
| symbol
| bigint
| void 
| never

type AnyFunction = (...args: any[]) => any
type restric<T>= T extends AnyFunction | Primitive  ? T : DeepReadonly<T>;

export type DeepReadonly<T> = {
  readonly [Key in keyof T]: restric<T[Key]>
}
