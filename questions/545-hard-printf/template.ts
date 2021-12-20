export type ControlsMap = {
    s: string
    d: number
}

export type Format<T extends string> =
    T extends `${infer _}%${infer C}${infer R}`
    ? C extends keyof ControlsMap ? (_: ControlsMap[C]) => Format<R> : string
    : string
