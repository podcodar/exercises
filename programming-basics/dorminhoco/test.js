const main = require('./main');


describe('Testes - Dominhoco', () => {

  afterEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();

  })
  it(`resultado deve ser uma string`, async () => {
    // const mockDream = jest.fn().mockReturnValue('Ovelhas astronautas')

    const sonho = await main.dorminhoco();
    expect(typeof sonho).toBe('string');
  });

  it(`resultado deve ser uma string`, async () => {
    main.dorminhoco();
    
    expect(setTimeout).toBeCalledTimes(1)
    
  });
  it(`espera que setTimeout seja chamado com uma função`, async () => {
    main.dorminhoco();

    expect(setTimeout).toBeCalledWith(expect.any(Function), 2000)
    
    
  });
});
