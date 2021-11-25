export type Chainable<T = {}> = {
  option<K extends string | number | symbol, V>(key: K, value: V): Chainable<T & { [Key in K]: V }>
  get(): T
}
