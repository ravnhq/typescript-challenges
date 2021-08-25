export type Length<T> = T extends {length: number} ? T['length'] : never;
