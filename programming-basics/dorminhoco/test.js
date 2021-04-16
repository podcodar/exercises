import { dorminhoco } from './main';
const dreamMock = ['não lembro do sonho', 'test', 'test2' ];

describe('Testes - Dominhoco', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
  });

  it(`checa retorno com array vazio como entrada`, () => {
    return dorminhoco(42, []).then((dream) => {
      expect(dream).toBe(undefined);
    });
  });

  it(`resultado deve ser uma string`, () => {
    return dorminhoco(42, dreamMock).then((dream) => {
      expect(typeof dream).toBe('string');
      expect(dream).toBe(dreamMock[0]);
    });
  });

  it(`checa retorno com entrada falsa`, () => {
    return dorminhoco(42, false).then((dream) => {
      expect(dream).toBe(undefined);
    });
  });

  it(`checa retorno com entrada como numero`, () => {
    return dorminhoco(42, 42).then((dream) => {
      expect(dream).toBe(undefined);
    });
  });

  it(`checa retorno com entrada como string`, () => {
    return dorminhoco(42, 'nao sou um array').then((dream) => {
      expect(dream).toBe('n');
    });
  });

  it(`espera que setTimeout seja chamado com uma função`, async () => {
    jest.useFakeTimers();
    dorminhoco(42, dreamMock);
    expect(setTimeout).toBeCalledWith(expect.any(Function), 42);
  });
});
