export type Diff<T, S> = {
  [P in (Exclude<keyof T, keyof S> | Exclude<keyof S, keyof T>)]: P extends keyof S 
  ? S[P] : P extends keyof T ? T[P] : never;
};