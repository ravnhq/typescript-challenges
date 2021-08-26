type MyExclude<T, U> = T extends U ? never : T

export type MyReadonly2<T, K extends keyof T = keyof T> = {
   readonly [P in K]: T[P]
  }
  &
  {
     [Key in MyExclude<keyof T, K>]: T[Key]
  }
