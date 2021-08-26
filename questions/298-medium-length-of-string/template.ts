export type String2Tuple<
  S extends string,
  C extends unknown[] = []
>
  = S extends `${infer char}${infer rest}`
      ? [...C,...String2Tuple<rest, [char]>]
      : C;

export type Length<T extends array> = T extends array ? T['length'] : 0

export type LengthOfString<T extends string> = Length<String2Tuple<T>>

interface array {
  length: number
}
