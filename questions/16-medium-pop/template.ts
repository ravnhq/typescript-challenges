export type Pop<T extends any[]> = T extends [...infer A, any] ? A : never

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]
