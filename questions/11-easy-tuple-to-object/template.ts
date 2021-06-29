export type TupleToObject<T extends readonly any[]> = {
    [valueA in T[number]]:valueA
}
//T[number] are the elements 
//readonly to be const