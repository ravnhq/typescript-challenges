export type Concat<T, U> = T extends Array<any> ? U extends Array<any> ? [...T, ...U] : never : never
