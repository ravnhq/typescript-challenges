export type AnyOf<T extends readonly any[]> = T extends [infer rest1, ... infer rest2] ?
                                                    rest1 extends 1 ? true :
                                                    rest1 extends 0|[] |false|''|{[key:string]:never} ? AnyOf<rest2> :
                                                    true  : false