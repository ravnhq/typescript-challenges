export type MyPick<Type, Key extends keyof Type> = {
  [NewKey in Key]: Type[NewKey]
}