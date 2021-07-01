export type Includes<T extends readonly any[], U> = 
    U extends T[number]
    ? true
    : false



/* Arrays has index signatures, which value is number
interface ArrayMaybe<Element> {
    [index: number]: Element;
} */