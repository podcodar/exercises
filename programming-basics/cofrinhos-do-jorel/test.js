import caixaEletronico from "./main";
import { testCases, testCasesPersistencia } from "./testCases";
import fs  from 'fs';

describe("Testes - Cofrinhos do Jorel", () => {

  const spy = jest.spyOn(console, 'log').mockImplementation();

  beforeEach(() => {
    spy.mockReset();
  });

  it(`Avalia as operações base esperadas`, () => {
    const { listaDeOperacoes, bancoResultado, logsResultado } = testCases.testeUm

    expect(caixaEletronico(listaDeOperacoes)).toStrictEqual(bancoResultado);
    expect(spy.mock.calls).toEqual(logsResultado);
  });


  it(`Avalia tratamento para a entrada dos nomes`, () => {
    const { listaDeOperacoes, bancoResultado, logsResultado } = testCases.testeDois;

    expect(caixaEletronico(listaDeOperacoes)).toStrictEqual(bancoResultado);
    expect(spy.mock.calls).toEqual(logsResultado);
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
    const { listaDeOperacoes1, listaDeOperacoes2, logsResultado, bancoResultado  } = testCasesPersistencia.testeUm;

    caixaEletronico(listaDeOperacoes1, true);
    

    expect(caixaEletronico(listaDeOperacoes2, true)).toEqual(bancoResultado);
    expect(spyLog.mock.calls).toEqual(logsResultado);
  });
});