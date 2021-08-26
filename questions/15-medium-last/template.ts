export type Last<T extends any[]>
  = T extends [...args: any, last: infer U] ? U : never ;
