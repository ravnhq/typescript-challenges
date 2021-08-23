export type Chainable<Options = {}> = {
  // recursively append { [S in K]: V } to Options
  option<K extends string, V>(key: K, value: V): Chainable<Options & { [key in K]: V }>
  get(): Options
}
