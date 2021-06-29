export type MyPick<T, K extends keyof T> = {
    [Key in K]: T[Key]
  }
  
export type TupleToUnion<T extends readonly any[]> =T[number];
