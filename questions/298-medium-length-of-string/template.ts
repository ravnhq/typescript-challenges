export type StringtoArray<S extends string,A extends Array<string> = []> = S extends `${infer first}${infer second}` ? 
                                                                            StringtoArray<second,[...A,first]>: A;

export type LengthOfString<S extends string> = StringtoArray<S,[]>["length"]
