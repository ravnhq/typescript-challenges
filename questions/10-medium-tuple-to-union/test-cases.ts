import { TupleToUnion } from './template'
import { Expect, Equal } from '../../utils/index'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
