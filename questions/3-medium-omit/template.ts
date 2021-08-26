export type MyOmit<T, K> = {
    [P in keyof T as Exclude<P, K>]: T[P];
};
 
