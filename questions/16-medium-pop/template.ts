export type Pop<T extends any[]> = T extends [] ? T : T extends [...infer E, infer L] ? E : never;
