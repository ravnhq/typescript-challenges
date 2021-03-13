export type LengthOfString<S extends string, T extends string[] = []> = 
  S extends `${infer START}${infer END}`
    ? LengthOfString<END, [...T, START]> 
    : T['length']
