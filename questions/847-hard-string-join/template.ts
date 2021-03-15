type JoinType<T extends string, U extends string[]> = U extends [infer U0, ...infer U1]
  ? U1 extends []
    ? `${U[0]}` 
    : U1 extends string[] 
      ? `${U[0]}${T}${JoinType<T, U1>}` 
      : never
  : ''
   
declare function join<T extends string>(delimiter: T): <U extends string[]>(...parts: U) => JoinType<T, U>
