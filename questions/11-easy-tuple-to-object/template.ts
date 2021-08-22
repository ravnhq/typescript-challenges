//I think number is neccesary to iterate the array and with ':' the array is converted to object setting the value as k
export type TupleToObject<T extends readonly string[]> = {
    [k in T[number]]: k
}