type Join<D extends string, T extends any[]> =
    T extends [] ? '' :
    T extends [infer I] ? `${I & string}` :
    T extends [infer H, ...infer R] ? `${H & string}${D}${Join<D, R>}` : never

declare function join<D extends string>(delimiter: D):
    <T extends string[]>(...parts: T) => Join<D, T>
