import { Length } from "../18-easy-tuple-length/template"

export type Replace<
  S extends string,
  From extends string,
  To extends string
>= From extends '' ?  S :
   S extends `${From}${infer restR}` ? 
                      `${To}${restR}`:
   S extends `${infer restL}${From}${infer restR}` ? 
                       `${restL}${To}${restR}`: never;
export type Capitalize<S extends string> =S extends `${infer first}${infer rest}` ? 
                                                    `${Uppercase<first>}${rest}`: '';
//detect doble bar the remplace by one to