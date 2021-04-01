import caixaEletronico from "./main";
import { testCases, persistenceTestCases } from "./testCases";
import fs  from 'fs';

describe("Testes - Cofrinhos do Jorel", () => {

  const spy = jest.spyOn(console, 'log').mockImplementation();

  beforeEach(() => {
    spy.mockReset();
  });

  it(`Avalia as operações base esperadas`, () => {
    const { operations, resultLogs, resultBank } = testCases.testOperations

    expect(caixaEletronico(operations)).toStrictEqual(resultBank);
    expect(spy.mock.calls).toEqual(resultLogs);
  });


  it(`Avalia tratamento para a entrada dos nomes`, () => {
    const { operations, resultLogs, resultBank } = testCases.testParsing;

    expect(caixaEletronico(operations)).toStrictEqual(resultBank);
    expect(spy.mock.calls).toEqual(resultLogs);
  });
});

describe("Testes - Cofrinhos do Jorel - Persistencia", () => {

  const spyLog = jest.spyOn(console, 'log').mockImplementation();
  
  beforeEach(() => {
    spyLog.mockReset();
  });

  afterAll(() => {
    fs.unlinkSync('persist.txt');
  })

  it(`Avalia persistencia`, () => {
    const { firstDayOperations, secondDayOperations, resultLogs, resultBank  } = persistenceTestCases.testPersistence;

    caixaEletronico(firstDayOperations, true);
    

    expect(caixaEletronico(secondDayOperations, true)).toEqual(resultBank);
    expect(spyLog.mock.calls).toEqual(resultLogs);
  });
});