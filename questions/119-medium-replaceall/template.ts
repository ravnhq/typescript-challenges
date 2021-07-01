export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends '' ?  S :
S extends `${infer restL}${From}${infer restR}` ? `${restL}${To}${ReplaceAll<restR,From,To>}`: S;
