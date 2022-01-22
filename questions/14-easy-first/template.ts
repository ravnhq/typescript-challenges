export type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
