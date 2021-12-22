export type DeepReadonly<T extends Record<string, unknown>> = {
    readonly [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepReadonly<T[Key]> : T[Key]
}
