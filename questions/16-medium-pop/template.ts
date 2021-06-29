export type Pop<T extends any[]> =  T extends [...(infer rest1),infer rest2] ? rest1: never;

