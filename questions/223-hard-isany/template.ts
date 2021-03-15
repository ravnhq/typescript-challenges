export type IsAny<T> = boolean extends (T extends never ? false : true) ? true : false
