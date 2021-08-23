// Using the infer keyword is like telling Typescript, “I want to take whatever you infer to be at this position and assign it to a new type variable.”
export type Awaited<T> = T extends Promise<infer R> ? R : never;
