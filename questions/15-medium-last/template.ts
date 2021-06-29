//descomposition
export type Last<T> = T extends [...(infer rest)] ? rest: never;
