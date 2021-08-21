import { LeftHandSideExpression } from "typescript";

export type First<T extends unknown[]> = '0' extends keyof T ? T[0] : never;
