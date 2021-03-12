export type StringToUnion<T extends string> = T extends `${infer I}${infer R}` 
  ? I | StringToUnion<R>
  :never
