export type Concat<T extends any[] , U extends any[]> = [...T,...U];
//export type First<T extends any[]> =  T[0] extends T[number] ? T[0] : never;