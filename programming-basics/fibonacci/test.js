import fib from "./main";

describe("Tests - Fibonacci", () => {
  it(`should calculate fibonacci of 0`, () => {
    expect(fib(1)).toBe(1);
  });

  it(`should calculate fibonacci of 1`, () => {
    expect(fib(2)).toBe(1);
  });

  it(`should calculate fibonacci of 10`, () => {
    expect(fib(10)).toBe(55);
  });

  it(`should calculate fibonacci of 100`, () => {
    expect(fib(20)).toBe(6765);
  });

  it(`should calculate fibonacci of negative numbers`, () => {
    expect(fib(-1)).toBe(undefined);
    expect(fib(-100)).toBe(undefined);
    expect(fib(-Infinity)).toBe(undefined);
  });
});
