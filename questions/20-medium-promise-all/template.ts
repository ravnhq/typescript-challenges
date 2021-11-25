import { Awaited } from "../189-easy-awaited/template";

export declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [Idx in keyof T]: Awaited<T[Idx]>
}>
