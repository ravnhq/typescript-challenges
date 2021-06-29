export type MyReadonly2<T,K extends  keyof T =  keyof T > =   T & {readonly [Key in K ] : T[Key]};
// constant parameter with =