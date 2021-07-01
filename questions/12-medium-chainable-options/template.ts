type Primitive = string | number | boolean | symbol | bigint | void | never

export type Chainable<Obj={}> = {
  option<Ts extends string,Ta>(key: Ts, value: Ta): Chainable<Obj &  {[ name in typeof key ]:Ta} >
  get(): Obj
}
