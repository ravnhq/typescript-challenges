type Falsy<T> = T extends false | 0 | '' | []
  ? true
  : T extends { [x: string ]: any }
    ? [keyof T] extends [never]
      ? true
      : false
    : false;

export type AnyOf<T extends readonly any[]>
  = T extends [infer first, ...infer rest]
    ? Falsy<first> extends true // Is falsy?
      ? AnyOf <rest> // continue search
      : true // finish search
    : false
