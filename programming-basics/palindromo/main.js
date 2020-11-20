function palindromo (palavra){
  //troca os espaços por uma string vazia
  palavra = palavra.replace(/ /g, '')
  //só a metade da palavra é suficiente para saber se é um palindromo
  for (let i = 0; i < palavra.length/2; i++){
  //compara uma posição com a posição oposta - tamanho da palavra - i - 1 
    if(palavra[palavra.length-i-1] != palavra[i]){
      return false;
    }
  }
  return true;   
}

export default palindromo;
