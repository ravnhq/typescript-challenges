export type Pop<T extends any[]>
  = T extends [...args: infer U, last: any] ? U : never ;
