export type Pop<T extends any[]> =  T extends [...(infer rest1),infer rest2] ? rest1: never;

//Here is true
export type Unshift<T extends any[]> = ((...t: T) => any) extends (
    _: any,
    ...rest: infer TT
  ) => any
    ? TT
    : [];

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

let c: Equal<Unshift<["a", "b", "c"]>, ["b", "c"]>; 
//T extends [infer rest1,...(infer rest2)] ? rest2: never;

