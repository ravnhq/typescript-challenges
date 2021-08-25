export type Length<T extends array> = T extends array ? T['length'] : 0 ;

interface array {
  length: number
}

