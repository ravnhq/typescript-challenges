type uppercase='A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z'
export type KebabCase<S> = S extends `${infer restA}${infer restB}`
                           ? restB extends Uncapitalize<restB> ? `${Uncapitalize<restA>}${KebabCase<restB>}` : 
                           `${Uncapitalize<restA>}-${KebabCase<`${Uncapitalize<restB>}`>}`
                           : S; 