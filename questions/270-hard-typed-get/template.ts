export type Get<T, K> = K extends keyof T
    ? T[K]
    : K extends `${infer I}.${infer R}` ? Get<Get<T, I>, R> : never
