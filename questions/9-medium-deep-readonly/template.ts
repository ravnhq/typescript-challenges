export type DeepReadonly<T> = keyof T extends never? T
  : { readonly [K in keyof T] : DeepReadonly<T[K]> }
