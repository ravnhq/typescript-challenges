type Merge<T> = { [P in keyof T]: T[P] }
export type AppendToObject<T, U extends string, V> = Merge<{ [P in keyof T]: T[P] } & { [P_ in U]: V }>