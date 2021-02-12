# Cofrinhos do Jorel

## Parte 1 - Problema Base

Jorel está muito feliz após ser contratado pelo banco Caixote como desenvolvedor! Como sua primeira tarefa Jorel deve desenvolver o primeiro caixa eletrônico do banco Caixote, trazendo a revolução digital para os clientes de sua única agência.

Inicialmente o caixa ficará ligado 24 horas por dia, logo todos os dados podem ficar apenas na memória do caixa eletrônico! Bem vamos ao levantamento de requisitos que o gerente Marquinhos preparou para sua primeira tarefa:

- Todos os clientes do banco são os únicos de seu nome, logo o caixa deverá pergunta apenas o `PrimeiroNome` e o `Valor` a ser retirado ou colocado em sua conta.
- Apenas clientes do banco podem usar nossas agências, logo não é necessário senhas ou verificações. Se um usuário ainda não existir em memória o mesmo deve ser criado pelo sistema.
- Um cliente pode apenas retirar pelo caixa eletrônico o dinheiro que tem, não podendo **NUNCA!!!** deixar sua conta com menos de R$5,00.
- Para retirar dinheiro da conta o cliente irá inserir um valor negativo, como `-30`. Para adicionar ele deve apenas digitar o valor normalmente como: `30`.

### Entrada

O caixa irá receber diversas operações através da `listaDeOperacoes`. Cada elemento da lista será um `Objeto` tendo como chave o `PrimeiroNome` do cliente e associado a esta chave o `Valor` que o cliente deseja depositar ou retirar.

```javascript
[{'benedito': '30'}, {'marquinhos': '50'}, {'bruninho': '25'}]
```

### Saída

Para cada uma das operações o caixa eletrônico deverá retornar uma resposta condizente, dentro dos seguintes termos:

- Retorna a string `Depositado` quando um cliente depositar dinheiro em sua conta pessoal.
- Retorna a string `Saque realizado com sucesso` quando um cliente sacar um valor válido de sua conta.
- Retorna a string `Saldo insuficiente` caso o cliente fique com menos de R$5,00 em sua conta após a operação.
- Retorna a string `Novo cliente criado! Saldo $` sendo `$` o saldo adicionado a conta do cliente.
- Retorna a string `Nao foi possivel criar a conta` caso o cliente não exista e o depósito incial for menor que R$5,00.
- Retorna a string `Conta nao existente` caso um cliente não existente tente sacar dinheiro

Pense para este exercício que o caixa foi acumulando as operações durante um longo dia e apenas ao fim do dia seu programa irá ler as operações e processar as respostas, retornando uma lista na mesma ordem das operações porém contendo as mensagens finais a serem entregues aos usuários no outro dia (o gerente Marquinhos nunca conheceu outra agência de banco e achou a idéia estupenda!).

```javascript
["Novo cliente criado! Saldo 30","Novo cliente criado! Saldo 50","Novo cliente criado! Saldo 25"]
```

---

### Um exemplo um pouco mais detalhado

Entrada (oque seu programa irá receber como `listaDeOperacoes`  na funcao `caixaEletronico`):

```javascript
[
    {'benedito': '30'},
    {'marquinhos': '-50'},
    {'bruninho': '25'},
    {'bruninho': '-20'},
    {'benedito': '15'},
    {'benedito': '-15'},
    {'bruninho': '-3'}
]
```

Saída (oque seu programa deve retornar na funcao `caixaEletronico`):

```javascript
[
    "Novo cliente criado! Saldo 30",
    "Conta nao existente",
    "Novo cliente criado! Saldo 25",
    "Saque realizado com sucesso",
    "Novo cliente criado! Saldo 15",
    "Saldo insuficiente",
    "Saldo insuficiente",
]
```

Neste problema separamos já duas funções para te auxiliar, a função principal `caixaEletronico` vai receber as operações do dia a serem processadas, a `processaOperacao` foi criada para te auxiliar a separar seu código e pensada para receber o `Nome` e o `Valor` e assim definir qual mensagem deve ser retornada para aquela operação.

> Sinta-se a vontade para alterar os parâmetros da funcao `processaOperacao`, porém a função `caixaEletronico` não deve ter seus parâmetros alterados.

---

## Parte 2 - Persistência

Bem, o gerente marquinhos percebeu que deixar o caixa eletrônico ligado 24/7 não era a melhor idéia. Principalmente considerando que a agência só ficava aberta para clientes por 4/5. Consternado Marquinhos pediu a você que o caixa pudesse ser desligado para salvar na conta de Luz!

Você deve melhorar o seu programa anterior para salvar os dados dos clientes de forma mais segura! Percebeu que os dados estão todos armazenados em `memória`? Isto quer dizer que não temos garantia de que as informações do cliente continuaram salvas após o caixa eletrônico ser desligado.

Para isto podemos armazenar os dados no `HD` do nosso computador como um arquivo! Você consegue completar este desafio? Vamos deixar aqui algumas referências.

- https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
- https://pt.stackoverflow.com/questions/342502/como-criar-um-arquivo-json-a-partir-de-um-js (segunda resposta)

Você vai perceber que `funciona!!!`, você pode por exemplo desligar e ligar o computador e os dados do cliente vão continuar salvos no seu computador!.

> Este exercício continua.
