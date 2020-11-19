import fib from "./main";

describe("Testes - Fibonacci", () => {
  it(`deve calcular o valor da sequencia de fibonacci para 0`, () => {
    expect(fib(1)).toBe(1);
  });

  it(`deve calcular o valor da sequencia de fibonacci para 1`, () => {
    expect(fib(2)).toBe(1);
  });

  it(`deve calcular o valor da sequencia de fibonacci para 10`, () => {
    expect(fib(10)).toBe(55);
  });

  it(`deve calcular o valor da sequencia de fibonacci para 20`, () => {
    expect(fib(20)).toBe(6765);
  });

  it(`deve calcular o valor da sequencia de fibonacci para negative numbers`, () => {
    expect(fib(-1)).toBe(undefined);
    expect(fib(-100)).toBe(undefined);
    expect(fib(-Infinity)).toBe(undefined);
  });
});
