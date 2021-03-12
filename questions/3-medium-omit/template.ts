export type MyOmit<T, K> = { [KEY in Exclude<keyof T, K>]: T[KEY] }
