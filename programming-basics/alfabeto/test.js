import verificaAlfabeto from "./main";

describe("Tests - Alfabeto", () => {
  const completeAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const longTest = "teste invalido pois nao contem todas as letras do alfabeto";

  it(`should return false for invalid payload with less than 26 letters`, () => {
    expect(verificaAlfabeto("kkk")).toBe(false);
  });

  it(`deve retornar false para palavras com mais de 26 letras porém sem todas as letras do alfabeto`, () => {
    expect(longTest).toBe(false);
  });

  it(`should return false for invalid payload missing 1 letter`, () => {
    expect(verificaAlfabeto(completeAlphabet.slice(0, 24))).toBe(false);
  });

  it(`should return true for valid payload`, () => {
    expect(verificaAlfabeto(completeAlphabet)).toBe(true);
  });
});
