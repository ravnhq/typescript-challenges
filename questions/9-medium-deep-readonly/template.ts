type allEObj = string | number | boolean | Function
export type DeepReadonly<T> = {
    readonly [key in keyof T]: T[key] extends allEObj 
    ? T[key] : DeepReadonly<T[key]>
}