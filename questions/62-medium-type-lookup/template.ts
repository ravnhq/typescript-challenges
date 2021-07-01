export type LookUp<U, T extends string > =U extends {type:T} ? U : never;
