export type MyPick<T, K extends keyof T> = {[KEY in K]: T[KEY]}
