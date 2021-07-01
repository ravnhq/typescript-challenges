export type Flatten<T ,A extends Array<any>=[] > =T extends [infer rest1,...infer rest2] ? 
                                                    rest1 extends [...infer otro] ? 
                                                    Flatten<rest2,Flatten<rest1,A>> : 
                                                    Flatten<rest2,[...A,rest1]>: A