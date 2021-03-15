export type Get<T, K> = K extends `${infer K0}.${infer K1}`
  ? Get<T[K0 & keyof T], K1>
  : T[K & keyof T]
