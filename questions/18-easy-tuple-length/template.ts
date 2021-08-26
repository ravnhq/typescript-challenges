type Length<T> = T extends Array<unknown> ? T["length"] : never;
