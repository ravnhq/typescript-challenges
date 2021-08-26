export type MyReadonly2<T, K extends keyof T = keyof T> = {
    [key in keyof T as key extends K ? never : key]: T[key]
}
