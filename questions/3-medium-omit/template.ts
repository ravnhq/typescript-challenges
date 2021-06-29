type MyPick<T, K extends keyof T> = {
    [Key in K]: T[Key]
  }

type MyExclude<T, U> =T extends U ? never : T;

export type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>