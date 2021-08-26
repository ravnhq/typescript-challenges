interface TypedInterface {
  type: string
}

export type LookUp<U, T> = U extends TypedInterface
  ? (T extends U['type'] ? U : never) : never
