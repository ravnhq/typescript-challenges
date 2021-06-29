type Primitive = string | number | boolean | symbol | bigint | void | never

export type Alike<Obj1 extends Object,Obj2 extends Object>= true;

//option<Ts extends string,Ta>(key: Ts, value: Ta): Ta extends Primitive ?  
export type Chainable<Obj={}> = {
  option<Ts extends string,Ta>(key: Ts, value: Ta): Chainable<Obj &  {[ name in typeof key ]:Ta} >
  get(): Obj
}
