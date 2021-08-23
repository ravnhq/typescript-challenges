export type Length<T extends any> = T extends readonly string[] ? T['length'] : never;
