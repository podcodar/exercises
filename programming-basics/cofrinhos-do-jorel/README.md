# Cofrinhos de Jorei

## Parte 1 - Problema Base

Jorei está muito feliz após ser contratado pelo banco Caixote como desenvolvedor! Como sua primeira tarefa Jorei deve desenvolver o primeiro caixa eletrônico do banco Caixote, trazendo a revolução digital para os clientes de sua única agência.

Inicialmente o caixa ficará ligado 24 horas por dia, logo todos os dados podem ficar apenas na memória do caixa eletrônico! Bem vamos ao levantamento de requisitos que o gerente Marquinhos :bowtie: preparou para sua primeira tarefa:

- Todos os clientes do banco são os únicos de seu nome, logo o caixa deverá pergunta apenas o `PrimeiroNome` e o `Valor` a ser retirado ou colocado em sua conta.
- Apenas clientes do banco podem usar nossas agências, logo não é necessário senhas ou verificações. Se um usuário ainda não existir em memória o mesmo deve ser criado pelo sistema.
- Um cliente pode apenas retirar pelo caixa eletrônico o dinheiro que tem, não podendo **NUNCA!!!** deixar sua conta com menos de R$5,00.
- Para retirar dinheiro da conta o cliente irá inserir um valor negativo, como `-30`. Para adicionar ele deve apenas digitar o valor normalmente como: `30`.

### Formato de entrada

O caixa irá receber diversas operações através da `listaDeOperacoes`. Cada elemento da lista será um `Objeto` tendo como chave o `PrimeiroNome` do cliente e associado a esta chave o `Valor` que o cliente deseja depositar ou retirar.

### Resultado esperado

Para cada uma das operações o caixa eletrônico deverá retornar uma resposta condizente, dentro dos seguintes termos:

- Retorna a string `Depositado` quando um cliente depositar dinheiro em sua conta pessoal.
- Retorna a string `Saque realizado com sucesso` quando um cliente sacar um valor válido de sua conta.
- Retorna a string `Saldo insuficiente` caso o cliente fique com menos de R$5,00 em sua conta após a operação.
- Retorna a string `Novo cliente criado! Saldo $` sendo `$` o saldo adicionado a conta do cliente.
- Retorna a string `Nao foi possivel criar a conta` caso o cliente não exista o depósito incial for menor que R$5,00 e o depósito inicial é maior ou igual a 0.
- Retorna a string `Conta nao existente` caso um cliente não existente tente sacar dinheiro

Pense para este exercício que o caixa foi acumulando as operações durante um longo dia e apenas ao fim do dia seu programa irá ler as operações e processar as respostas, retornando no fim do dia, qual o status atual dos cofres (o gerente Marquinhos nunca conheceu outra agência de banco e achou a idéia estupenda!).

```javascript
// O retorno da sua função deve obedecer este padrao
const banco = {
    "benedito": 30,
    "marquinhos": 50,
    "bruninho": 25
}
```

---

### Um exemplo um pouco mais detalhado

#### Entrada

Para cada caso de teste será invocada a função `caixaEletronico` implementada por você (não altere o template da chamada).
Será dado como parâmetro para sua função uma lista de operações no seguinte formato:

```javascript
const listaDeOperacoes = [
    {'jorjinho': '30'},
    {'marquinhos': '-50'},
    {'bruninho': '25'},
    {'bruninho': '-20'},
    {'benedito': '15'},
    {'benedito': '-15'},
    {'bruninho': '-3'}
]
```

#### Saída

Para cada caso de teste, você será avaliado em duas frentes:

- Se o programa enviou os logs esperados:
  - Mensagens condizentes com a operação desejada
  - Ordem correta das mensagens
- O estado final do banco, ou seja, que após todas as operações seja possível ver o saldo atual de todos os clientes.  

```javascript
// Oque sua função deve retornar
bancoFinal = {"jorjinho": 30,"bruninho": 5,"benedito": 15}

// Oque seu código deve logar em ordem
logsEnviados = [
    "Novo cliente criado! Saldo 30",
    "Conta nao existente",
    "Novo cliente criado! Saldo 25",
    "Saque realizado com sucesso",
    "Novo cliente criado! Saldo 15",
    "Saldo insuficiente",
    "Saldo insuficiente",
]
```

> É **MUITO IMPORTANTE** utilizar apenas o `console.log` neste exercício. Logo para toda situação descrita acima
o programa deve logar a resposta condizente.

---

## Parte 2 - Persistência

Bem, o gerente marquinhos percebeu que deixar o caixa eletrônico ligado 24/7 não era a melhor idéia. Principalmente considerando que a agência só ficava aberta para clientes por 4/5. Consternado Marquinhos pediu a você que o caixa pudesse ser desligado para salvar na conta de Luz!

Você deve melhorar o seu programa anterior para salvar os dados dos clientes de forma mais segura! Percebeu que os dados estão todos armazenados em `memória`? Isto quer dizer que não temos garantia de que as informações do cliente continuaram salvas após o caixa eletrônico ser desligado.

Para isto podemos armazenar os dados no `HD` do nosso computador como um arquivo! Você consegue completar este desafio? Vamos deixar aqui algumas referências.

- [Referência inglês](https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file).
- [Referência português](https://pt.stackoverflow.com/questions/342502/como-criar-um-arquivo-json-a-partir-de-um-js).

Você vai perceber que `funciona!!!`, você pode por exemplo desligar e ligar o computador e os dados do cliente vão continuar salvos no seu computador!.

Para ajudar nos testes vamos primeiro fazer uma pequena modificação, vamos adicionar uma nova opção a função `caixaEletronico`:

```javascript
// Altere a chamada da sua funcao no ./main.js para este formato
const caixaEletronico = (listaDeOperacoes, persistir) => {
    // ...
}
```

Pense que persistir é um `booleano` ou seja podemos escolher ou não salvar e fazer o load dos dados depois, por exemplo,
se tivermos 2 exemplos simples de entrada:

```javascript
const listaDeOperacoes1 = [
    {'jorjinho':  30}
]

const listaDeOperacoes2 = [
    {'jorjinho': 30}
]

caixaEletronico = (listaDeOperacoes1, true);
caixaEletronico = (listaDeOperacoes2, true);
```

> :exclamation::exclamation::exclamation: Para salvar seus dados crie um arquivo com o nome `persist.txt`, Isto é muito importante para que os testes funcionem corretamente!
>
> Para fazer corretamente a persistencia, sugerimos o uso da seguinte biblioteca e seus métodos:
>
> - [NodeJs FileSystem](https://nodejs.org/api/fs.html)
>   - fs.writeFileSync (Escreve texto em um arquivo)
>   - fs.readFileSync (Lê textos de um arquivo)
>   - fs.exists (verificar se o arquivo existe)
>
> - [JSON](https://www.json.org/json-en.html)
>   - JSON.parse (Lê uma JSON string e retorna um objeto )
>   - JSON.stringify (Recebe um objeto e retorna uma JSON string)

O banco final deve ser:

```javascript
// Ao final da execucao este deve ser o valor do banco
const bancoFinal = {
    'jorjinho': 60
}
// Perceba que sem a persistencia, após a segunda execução
// o código retornaria {'jorjinho': 30}
```

Para este exercício será avaliado o resultado ao final de N execuções da sua função, bem como todo o log da execução em ordem.
