## Contagem regressiva!

Vamos construir uma contagem regressiva usando nosso conhecimento em Javascript e HTML?

Não? :( Então fica para a próxima

Sim? Então contagem regressiva para o enunciado:

10

9

8

7

6

5

4

3

2

1

![alt text](https://media.giphy.com/media/xT0xeHDVBcAulhRJRK/giphy.gif "BOOOM")

## Spoiler!
No final desse exercício teremos uma página semelhante a seguinte:

![alt text](https://imgur.com/1cDYv7y.gif "Olha o bruxo ai!")

## Preparação
Esse exercício será implementado utilizando os estilos presentes na biblioteca [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/). Antes de prosseguir para solução, dê uma familiarizada básica na documentação dela.

**Observação**: Os exercícios que iremos propor a vocês não incluirão apenas assuntos abordados nas **meetups**. Queremos que vocês sejam pró-ativos e tentem aprender outros assuntos por conta própria. Lembre-se, o Google é seu amigo e estamos disponíveis para tirar dúvidas nos nossos canais.

## Racional

Esse tutorial está dividido em seções para facilitar a construção da página. Em geral, é uma boa prática dividirmos um projeto/problema em subjprojetos/problemas; pois assim diminuimos a complexidade de cada parte do problema que iremos resolver.

Antes de prosseguir para a implementação da página, faça um simples exercício e pense como você se organizaria para resolver o problema proposto. 

**.........**

Caso tenha confiança nesse planejamento, prossiga na sua resolução e depois confira a proposta sugerida a seguir. Se você não conseguiu encontrar uma forma clara para implementar a página, sem problemas, iremos mostrar passo a passo como fazê-lo.

## 1 - Dinâmica da página
Como você deve ter percebido, a dinâmica da página foi exibida através de um gif (é isso mesmo, ela só faz isso :)). Podemos dividir essa página em três telas: **home**, **countdown** e **success**. 

Elas obedecem a sequência:

    home --> countdown --> success --|
    ^---------------------------------
**Observação**: apenas uma tela será exibida por vez.

Construa um **div** para cada tela e atributa o seu id com o nome da tela.  

Depois disso iremos definir as funções de transição para cada tela. São elas:
```javascript
// Equivale ao --> home no diagrama das telas.
// Essa função deve ser chamada quando a página é carregada ou quando o usuário apertar o
// botão "resetar" na tela de sucesso.
// Aqui devemos deixar visível apenas o conteúdo da tela "home" (as outras telas devem 
// ficar invisíveis). Também é importante limparmos o conteúdo preexistente no campo 
// "Tempo" e definir o fundo da tela com a cor branca.
function startHome() {}

// Equivale ao --> countdown no diagrama das telas.
// Essa função deve ser chamada quando o usuário clicar no botão "iniciar" e o campo 
// "tempo" tiver um número válido. Devemos executar essa função passando o valor numérico
// do campo "tempo" como parâmetro.
// Aqui devemos deixar visível apenas o conteúdo da tela "countdown" (as outras telas 
// devem ficar invisíveis). Também é responsabilidade dessa função iniciar a contagem 
// regressiva e definir a lógica que será executada a cada segundo em que a tela será 
// atualizada.
function startCountdown(time) {}

// Equivale ao --> success no diagrama das telas.
// Essa função deve ser chamada quando a contagem regressiva acabar.
// Aqui devemos deixar visível apenas o conteúdo da tela "success" (as outras telas devem
// ficar invisíveis).
function startSuccess() {}
```
Não é necessário implementar a lógica de cada função ainda, apenas definam-as. Lembre-se que estamos dividindo o problema principal em problemas menores (cada coisa na sua hora).

## 2 - Construindo a tela "home"
Construa uma página semelhante a seguinte:
![alt text](https://i.imgur.com/Y9wWJKS.png "Página inicial")

Chegou a hora de implementar a função `startHome()` que descrevemos anteriormente.

**Observação**: Não se esqueça de utilizar os estilos do **bootstrap** para definir as telas.

### 2.1 - Validando o campo **Tempo**
O valor do campo **Tempo** deve aceitar apenas números inteiros positivos. Quando o usuário clicar no botão "Iniciar" e o valor digitado no campo "Tempo" não for um inteiro positivo, exiba um pop up com uma mensagem de erro:
![alt text](https://i.imgur.com/2sK4TLT.png "Mensagem de erro")

## 2.2 - Inicie a contagem regressiva
Ao clicar no botão "Iniciar" (caso o valor inserido no campo "Tempo" seja válido) devemos iniciar a contagem regressiva. Em outras palavras, chamaremos a função `startCountdown(time)` passando o valor do campo "Tempo" como parâmetro da função.

## 3 - Construindo a tela "countdown"
Essa é a tela mais complexa da página. Serei repetitivo mais uma vez, vamos por partes...

Primeiramente construíremos a tela no seu estado inicial (sem dinamismo):
![alt text](https://i.imgur.com/d7hxvPw.png "Bruxo congelado!")

Também precisamos implementar a função `startCountdown(time)` para exibir a tela estática quando essa função for chamada.

E o gif do Bruxo? [Aqui](https://thumbs.gfycat.com/SelfreliantClutteredBlackpanther-max-1mb.gif)

### 3.1 - Atualizando o texto de tempo restante
Precisamos atualizar o texto de tempo restante a cada segundo. Para isso, defina um **id** para o elemento que você colocará o texto de tempo restante e atualize o seu conteúdo a cada segundo.

**Dica 1**: para agendar a execução da função utilize o [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp).

**Dica 2**: armazene o tempo total e o tempo restante em variáveis.

### 3.2 - Atualizando a cor do fundo da tela
Na mesma função que você definiu a lógica para atualizar o texto de tempo restante, você irá atualizar a cor do fundo da página. A cor terá o seguinte valor:

`rgb(x, 255, x)`

Onde:

`x = Math.cel(remainingSeconds / totalSeconds * 255)`

### 3.3 - Fim da contagem regressiva
Quando a contagem regressiva terminar (a.k.a. `remainingSeconds = 0`), chame a função `startSuccess()`.


## 4 - Tela de sucesso
Antes de mais nada, não é para fazer algo parecido com isso:
![alt text](https://imagem.natelinha.uol.com.br/original/teladesucessos1997_6b7746443b2fade50fb6904778c3047b41333bce.jpeg "Pela primeira vez na televisão!")

É para construir essa tela :

![alt text](https://i.imgur.com/J811BUI.png "Tela de sucesso: O filme do Pelé.")

Vale lembrar que precisamos implementar a função `startSuccess()`. Também é necessário adicionarmos um compartamento no clique do botão "resetar", quando clicado ele deve chamar a função `startHome()`.

E o gif do Pelé? [Aqui](https://thumbs.gfycat.com/DifferentDimpledHamster-max-1mb.gif)

## 5 - Conclusão
O nosso exercício acaba por aqui. Espero que você tenha gostado e aprendido algo com o conteúdo passado. Para além dos assuntos da tecnologia, gostaria de enfatizar (mais uma vez) a importância de fragmentarmos o problema principal em problemas menores, isso facilita muito nossa vida na computação. Peço para que tentem colocar em prática esse método no seu cotidiano na programação.

Qualquer dúvida ou sugestão, fique a vontade para entrar em contato nos nossos canais.