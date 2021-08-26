export type DeepReadonly<T> = {
  readonly [property in keyof T]: keyof T[property] extends undefined
    ? T[property] : DeepReadonly<T[property]>
}
