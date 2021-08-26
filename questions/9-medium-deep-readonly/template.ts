export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends { [key: string]: infer Y }
    ? DeepReadonly<T[P]>
    : T[P]
}
