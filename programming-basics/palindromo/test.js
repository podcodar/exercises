import palindromo from "./main";

describe("Testes - Palindromo", () => {
  const complexString = "socorram me subi no onibus em marrocos";
  const revertedComplexString = "socorram me subino on ibus em marrocos";

  it(`deve retornar false para casos invalidos `, () => {
    expect(palindromo("abc", "abc")).toBe(false);
  });

  it(`deve retornar true para casos validos de palindromo `, () => {
    expect(palindromo("ovo", "ovo")).toBe(true);
  });

  it(`deve retornar true para casos validos de  palindromo com espaços `, () => {
    expect(palindromo(complexString, revertedComplexString)).toBe(true);
  });
});
