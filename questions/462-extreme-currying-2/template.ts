type DynamicCurry<Args, Ret, D extends unknown[] = []> =
    Args extends [infer H, ...infer T]
    ? T extends [] ? (...args: [...D, H]) => Ret : ((...args: [...D, H]) => DynamicCurry<T, Ret>) & DynamicCurry<T, Ret, [...D, H]>
    : () => Ret

export declare function DynamicParamsCurrying<Args extends unknown[], Ret>(fn: (...args: Args) => Ret):
    DynamicCurry<Args, Ret>
