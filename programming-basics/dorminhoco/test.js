import { dorminhoco } from './main';
const dreamMock = ['não lembro do sonho'];

describe('Testes - Dominhoco', () => {

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
    jest.runAllTimers()
  });

  it(`checa retorno com array vazio como entrada`, async () => {
    const dream = await dorminhoco(42, []);
    expect(dream).toBe(undefined);
  });

  it(`resultado deve ser uma string`, async () => {
    const dream = await dorminhoco(42, dreamMock);

    expect(typeof dream).toBe('string');
    expect(dream).toBe(dreamMock[0]);
  });

  it(`espera que setTimeout seja chamado com uma função`, async () => {
    jest.useFakeTimers();
    dorminhoco(42, dreamMock);
    expect(setTimeout).toBeCalledWith(expect.any(Function), 42);
  });

});
