export type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends '' 
? S : S extends `${infer SL}${From}${infer SR}` 
? `${SL}${To}${SR}`: S;