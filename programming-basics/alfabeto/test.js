import verificaAlfabeto from "./main";

describe("Testes - Alfabeto", () => {
  const completeAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const longTest = "teste invalido pois nao contem todas as letras do alfabeto";

  it(`deve retornar false para palavras com menos de 26 letras`, () => {
    expect(verificaAlfabeto("kkk")).toBe(false);
  });

  it(`deve retornar false para palavras com mais de 26 letras porém sem todas as letras do alfabeto`, () => {
    expect(longTest).toBe(false);
  });

  it(`deve retornar false para uma palavra com todas letras do alfabeto menos a ultima`, () => {
    expect(verificaAlfabeto(completeAlphabet.slice(0, 24))).toBe(false);
  });

  it(`deve retornar true para palavras com todas as 26 letras do alfabeto`, () => {
    expect(verificaAlfabeto(completeAlphabet)).toBe(true);
  });

  it(`deve retornar true para palavras com mais de 26 letras contendo todas do alfabeto`, () => {
    expect(verificaAlfabeto(completeAlphabet + "abcdefgkkkk")).toBe(true);
  });
});
