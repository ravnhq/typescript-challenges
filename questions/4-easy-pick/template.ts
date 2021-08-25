export type MyPick<T, K extends keyof T> = {
  [property in K] : T[property];
}

