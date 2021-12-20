import { GetRequired } from "../57-hard-get-required/template";

export type RequiredKeys<T> = keyof GetRequired<T>
