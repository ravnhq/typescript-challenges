export type Pop<T extends any[]> = T extends [...infer array, infer last]? array:never
