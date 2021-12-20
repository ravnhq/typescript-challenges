// Function type constructors are contravariant, general types will be subtype of 
// specific types in the argument position, the minimum compatible type then is 
// the more specific type, which turns out is the intersection of the subtypes
//
// Note: If C : B then Func<B> : Func<C>,
// 
// For our function argument we flip the type relationship so we can use the more 
// general type which is Func<C> as our base type, we're now allowed to replace 
// Func<C> with Func<B> because the minimum now is the more specific type, if this 
// wasn't contravariant we would have that Func<B> is the base type, and trying to 
// replace Func<B> with Func<C> would result in an incorrect program because the 
// caller would have expected a C type in as its argument but the producer would have 
// invoked it with the simplest type B, and then working with specific C traits would result 
// in an error since B doesn't have those.
//
// In TypeScript, note that (number & string): string is type correct, in order to infer 
// an parameter type for the union of two function types such as:
//
// (a: number) => void | (a: string) => void 
//
// We would have to provide a function type which now accepts the more specific type 
// in the first parameter position, an specific type of number is (number & string) 
// and a specific type of string is (number & string), this results in a base type being 
// created such as:
//
// (a: number & string) => void
//
// Here we would be theoritically able to work with either a number or a string as 
// the parameter of the function call, because the specific type contains both base 
// types, however notice that number & string is actually never, this logic is instead
// mostly used for object types, if you were going to expect a property from an subtype object
// that is not present in the base type object, your function will need to receive the 
// specific subtype object so it's able to correctly work.
//
// If using a function as a first-class citizen in the argument position of another 
// function you would also be able to provide a function with a base type of the required
// argument, this function will still accept your function with the parameter being a base
// type since any specific type provided to you will still be a subtype of the base type your 
// function expects. 
type UnionToIntersection<T> =
    (T extends any ? (_: T) => void : never) extends (_: infer I) => void ? I : never

type AnyFunction<T> = T extends any ? (_: T) => any : never

// Picks last overload from intersection, TypeScript machinery
type UnionLast<T> =
    UnionToIntersection<AnyFunction<T>> extends (_: infer L) => any ? L : never

export type UnionToTuple<T, L = UnionLast<T>> = [T] extends [never]
    ? []
    : [...UnionToTuple<Exclude<T, L>>, L]
