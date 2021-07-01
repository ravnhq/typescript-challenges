type uppercase='A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z'
export type CamelCase<S extends string> = S extends `${infer rest1}-${infer char}${infer rest2}` ?
                                          char extends '-' ? `${rest1}-${CamelCase<`${char}${rest2}`>}`:
                                          char extends uppercase ? `${rest1}-${char}${ rest2}`:
                                         `${rest1}${Uppercase<char>}${CamelCase<rest2>}`:
                                          S 
let a: CamelCase<"foo--bar----baz">