export type MyOmit<T, Key extends keyof T> = Pick<T, Exclude<keyof T, Key>>
