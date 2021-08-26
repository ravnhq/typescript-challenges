export type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

interface hel {
  name: string
  last: string
  age: number
}

type ro<T, U extends keyof T > = T &
  {
    readonly [P in U]: T[P]
  }

type test = ro<hel, 'name'>
