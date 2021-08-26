export type CamelCase<S>
  = S extends `${infer before}${'-'}${infer rest}`
    ? rest extends Capitalize<rest> // Is a Uppercase or symbol?
      ? `${before}-${CamelCase<rest>}` // is symbol or upper -> continue
      : `${before}${CamelCase<Capitalize<rest>>}` // is lower -> make upper n continue
    : S
