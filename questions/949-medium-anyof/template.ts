type Falses = false | 0 | '' | [] | {[P in any]: never}
export type AnyOf<T extends readonly any[]> = T extends [infer L, ...infer R]
  ? L extends Falses ? AnyOf<R> : true
  : false;
