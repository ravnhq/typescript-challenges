import { Length } from "../18-easy-tuple-length/template"

export type Replace<
  S extends string,
  From extends string,
  To extends string
>= From extends '' ?  S :
   S extends `${infer restL}${From}${infer restR}` ? `${restL}${To}${restR}`: never;

//detect doble bar the remplace by one to