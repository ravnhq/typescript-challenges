import { GetOptional } from "../59-hard-get-optional/template";

export type OptionalKeys<T> = keyof GetOptional<T>
