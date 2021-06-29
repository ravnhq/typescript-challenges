import { Pop } from './template'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]

/* type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2,1]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c','d']>>,
] */
