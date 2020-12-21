import { dorminhoco } from './main';
const dreamMock = ['não lembro do sonho'];

describe('Testes - Dominhoco', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it(`resultado deve ser uma string`, async () => {
    const dream = await dorminhoco(42, dreamMock);
    expect(typeof dream).toBe('string');
    expect(dream).toBe(dreamMock[0]);
  });

  it(`espera que setTimeout seja chamado com uma função`, async () => {
    dorminhoco(42, dreamMock);
    expect(setTimeout).toBeCalledTimes(1);
    expect(setTimeout).toBeCalledWith(expect.any(Function), 42);
  });

  it(`checa se sonho tem retorno válido`, async () => {
    const dream = dorminhoco(42, dreamMock);

    expect(dream).not.toEqual([])
    expect(!dream).toBe(false)
  });
});
