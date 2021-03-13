export type AnyOf<T extends readonly any[]> = 
  T[number] extends false | [] | 0 | "" | {[K in any]: never}
    ? false 
    : true
