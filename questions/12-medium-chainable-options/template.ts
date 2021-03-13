export type Chainable< T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & { [KEY in K ]: V }>
  get(): T
}
