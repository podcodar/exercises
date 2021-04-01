# Trilha de Programming Basics

Esta trilha possui diversos exercícios de nível **fácil** indo até **médio** que buscam passar por diversos temas da computação no geral.

Caso você ainda não tenha passado pelo [tutorial inicial na base do reposítorio](../README.md) por favor, siga as instruções do tópico `Como fazer os exercícios` para fazer o setup correto em seu computador.

Cada pasta nesta lista de exercícios contém:

    - Um arquivo `README.md` contendo a ordem do problema.
    - Um arquivo `main.js` onde você deverá implementar a resolução do problema.
    - Um arquivo `test.js` contendo casos de teste onde você conseguira validar sua solução.

Ordenamos os exercícios por dificuldade, esta é uma ordem sugerida para realização da lista:

- 01 - Fibonacci

## Dependências

Seu computador precisa ter instalado:

- node
- npm

Para que você consiga executar os testes sobre a sua resolução.

## Setup

Primeiro você deve instalar as dependências desta lista de exercícios **Programming Basics**, para isto:

```sh
# Na pasta path_to/exercises/programming-basics
npm i
```

...Presto! 😁

## Testando os exercícios

Para rodar os testes de um exercício você precisa:

- **Sistemas Linux**

  - acessar a pasta do exercício
  - rodar `npm run test:lin` dentro da pasta do exercício

- **Sistemas Windows PowerShell**

  - acessar a pasta do exercício
  - rodar `npm run test:win -- $pwd/test.js` dentro da pasta do exercício

Voce pode utilizar também o comando `npm test:all` nesta pasta (`exercises/programming-basics/`), isto vai executar todos os testes de todos os exercícios desta lista!
