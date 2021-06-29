export type Capitalize<S extends string> =S extends `${infer first}${infer rest}` ? 
                                                    `${Uppercase<first>}${rest}`: '';
