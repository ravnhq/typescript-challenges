export type Length<T extends any> = T extends { length: number }
  ? T['length']
  : never
