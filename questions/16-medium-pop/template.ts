export type Pop<T extends any[]> = T extends [...infer _, infer last] ? _ : never;
