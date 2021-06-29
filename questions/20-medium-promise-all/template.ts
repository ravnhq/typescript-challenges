//export declare function PromiseAll< Tp extends any[]>(values: readonly [...Tp]): Promise<{[key in keyof Tp]:Tp[key] extends Promise<infer U> ? U :Tp[key] }>

export declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [key in keyof T]: T[key] extends Promise<infer R> ? R : T[key]
}>