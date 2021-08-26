export type First<T extends any[]> = T extends [] ? never : T[0]

//export type First<T extends any[]> = T extends []
  //? never
  //: T extends [infer R, ...infer Q]
  //? R
  //: never
