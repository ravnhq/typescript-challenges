export type Merge<F, S> = { [K in keyof F]: K extends keyof S ? S[K] : F[K] }
