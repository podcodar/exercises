import fib from './main'

describe('programming-basics[001]', () => {
  it(`should calculate fibonacci of 0`, () => {
    const result = fib(1)
    expect(result).toBe(1)
  })

  it(`should calculate fibonacci of 1`, () => {
    const result = fib(2)
    expect(result).toBe(1)
  })

  it(`should calculate fibonacci of 10`, () => {
    const result = fib(10)
    expect(result).toBe(55)
  })

  it(`should calculate fibonacci of 100`, () => {
    const result = fib(20)
    expect(result).toBe(6765)
  })

  it(`should calculate fibonacci of -1`, () => {
    const result = fib(-1)
    expect(result).toBe(0)
  })
})