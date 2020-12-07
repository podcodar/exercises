const main = require('./main');

describe('Testes - Dominhoco', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });
  const dreamMock = ['não lembro do sonho'];

  it(`resultado deve ser uma string`, async () => {
    const dream = await main.dorminhoco(42, dreamMock);
    expect(typeof dream).toBe('string');
    expect(dream).toBe(dreamMock[0]);
  });

  it(`setTimeout dever ser sido chamado uma vez`, async () => {
    main.dorminhoco(42, dreamMock);

    expect(setTimeout).toBeCalledTimes(1);
  });
  it(`espera que setTimeout seja chamado com uma função`, async () => {
    main.dorminhoco(42, dreamMock);

    expect(setTimeout).toBeCalledWith(expect.any(Function), 42);
  });
});
