import { HelloWorld } from './template'
import { Expect, Equal, NotAny } from '../../utils/index'

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>]
