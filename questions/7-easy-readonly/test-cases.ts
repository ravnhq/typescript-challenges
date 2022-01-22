import { MyReadonly } from './template'
import { Expect, Equal } from '../../utils/index'
type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
  title: string
  description: string
  completed: boolean
}
