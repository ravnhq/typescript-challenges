export type If<C extends boolean, T, F> = 
    C extends true
    ? T
    : F 

//condition C true| false , if true-> T, else F