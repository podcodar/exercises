import palindromo from "./main";

describe("Tests - Palindromo", () => {
  const complexString = "socorram me subi no onibus em marrocos";
  const revertedComplexString = "socorram me subino on ibus em marrocos";

  it(`should return false for invalid payload `, () => {
    expect(palindromo("abc", "abc")).toBe(false);
  });

  it(`should return true for valid palindrom `, () => {
    expect(palindromo("ovo", "ovo")).toBe(true);
  });

  it(`should return true for valid palindrom with spaces `, () => {
    expect(palindromo(complexString, revertedComplexString)).toBe(true);
  });
});
