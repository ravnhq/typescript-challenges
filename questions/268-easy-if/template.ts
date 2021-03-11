export type If<C extends boolean, T, F> = C extends null ? never : C extends true ? T : F
