import palindromo from "./main";

describe("Tests - Palindromo", () => {
  const complexString = "socorram me subi no onibus em marrocos";

  it(`deve retornar false para casos invalidos `, () => {
    expect(palindromo("nao e palindromo")).toBe(false);
  });

  it(`deve retornar true para casos validos de palindromo `, () => {
    expect(palindromo("ovo")).toBe(true);
  });

  it(`deve retornar true para casos validos de  palindromo com espaços `, () => {
    expect(palindromo(complexString)).toBe(true);
  });
});
