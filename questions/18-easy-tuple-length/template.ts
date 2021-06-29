export type Length<T extends any> = T extends {length:number}? T['length']:never;
// from T only I want the property length
