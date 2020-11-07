import fibb from './main'

describe('programming-basics[001]', () => {
  it(`should calculate fibbonacci of 0`, () => {
    const result = fibb(0)
    expect(result).toBe(1)
  })

  it(`should calculate fibbonacci of 1`, () => {
    const result = fibb(1)
    expect(result).toBe(1)
  })

  it(`should calculate fibbonacci of 10`, () => {
    const result = fibb(10)
    expect(result).toBe()
  })
})