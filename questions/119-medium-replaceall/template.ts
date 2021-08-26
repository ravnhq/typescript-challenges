export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends''
? S : S extends `${infer SL}${From}${infer SR}`
? `${SL}${ReplaceAll<`${To}${SR}`,From,To>}`: S;
