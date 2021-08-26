export type Length<T> = T extends readonly any[] ? T['length'] : never


