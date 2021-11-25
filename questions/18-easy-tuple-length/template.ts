export type Length<T extends any> = T extends readonly any[] ? T["length"] : never
