type Falsy = false | '' | 0 | { [key: string]: never } | []

export type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true