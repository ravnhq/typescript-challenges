export type LookUp<U extends { type: unknown }, T> = U extends { type: T } ? U : never
