type Length<T, K, R extends any[] = []> = T extends readonly [infer T0, ...infer T1]
  ? T0 extends K
    ? R
    : Length<T1, K, [K, ...R]>
  : []

export type Enum<T extends readonly string[], N extends boolean = false> = N extends false 
  ? { readonly [K in T[number] as `${Capitalize<K>}`]: K }
  : { readonly [K in T[number] as `${Capitalize<K>}`] : Length<T, K>['length']}
