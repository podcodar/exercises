import somaFatoriais from "./main.js";

describe("Testes - Soma Fatoriais", () => {
  it(`Para as entradas 2 e 2 o programa deve retornar 4`, () => {
    expect(somaFatoriais(2, 2)).toBe(4);
  });

  it(`Para as entradas 0 e 0 o programa deve retornar 2`, () => {
    expect(somaFatoriais(0, 0)).toBe(2);
  });

  it(`Para as entradas 4 e 5 o programa deve retornar 144`, () => {
    expect(somaFatoriais(4, 5)).toBe(144);
  });
});
