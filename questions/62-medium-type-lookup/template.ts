function getProperty<T,K extends keyof T>(obj:T,key:K){
    return obj[key];
}

export type LookUp<U, T extends string > =U extends {type:T} ? U : never;
