import caixaEletronico from "./main";

describe("Testes - Cofrinhos do Jorel", () => {
  const entrada1 = [
    {'benedito': '30'},
    {'marquinhos': '-50'},
    {'bruninho': '25'},
    {'bruninho': '-20'},
    {'benedito': '15'},
    {'benedito': '-15'},
    {'bruninho': '-3'}
  ]

  const saida1 = [
    "Novo cliente criado! Saldo 30",
    "Conta nao existente",
    "Novo cliente criado! Saldo 25",
    "Saque realizado com sucesso",
    "Novo cliente criado! Saldo 15",
    "Saldo insuficiente",
    "Saldo insuficiente",
  ]

  it(`deve retornar a sequencia correta de respostas para o caso 1`, () => {
    expect(caixaEletronico(entrada1)).toBe(saida1);
  });

});
