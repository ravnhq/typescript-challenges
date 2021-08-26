type MyExclude<T, U> = T extends U ? never : T ;

export type MyOmit<T, K> = {
  [property in MyExclude<keyof T, K>]: T[property]
}
