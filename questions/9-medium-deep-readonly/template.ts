export type DeepReadonly<T> = {
  readonly [key in keyof T]: keyof T[key] extends never 
  ? T[key]
  : DeepReadonly<T[key]>
}