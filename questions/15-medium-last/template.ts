//descomposition
export type Last<T> = T extends [...any,infer rest] ? rest: never;
