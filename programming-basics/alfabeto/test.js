import verificaAlfabeto from "./main";

describe("Tests - Alfabeto", () => {
  const completeAlphabet = "abcdefghijklmnopqrstuvwxyz";

  it(`should return false for invalid payload with less than 26 letters`, () => {
    expect(verificaAlfabeto("kkk")).toBe(false);
  });

  it(`should return false for invalid payload with more than 26 letters`, () => {
    expect(
      verificaAlfabeto(
        "este e um teste invalido pois nao contem todas as letras do alfabeto"
      )
    ).toBe(false);
  });

  it(`should return false for invalid payload missing 1 letter`, () => {
    expect(verificaAlfabeto(completeAlphabet.slice(0, 24))).toBe(false);
  });

  it(`should return true for valid payload`, () => {
    expect(verificaAlfabeto(completeAlphabet)).toBe(true);
  });
});
