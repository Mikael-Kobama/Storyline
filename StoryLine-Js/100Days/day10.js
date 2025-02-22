// Função para realizar a busca binária
function buscaBinaria(arr, alvo) {
  let esquerda = 0; // Índice inicial do vetor
  let direita = arr.length - 1; // Índice final do vetor
  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2); // Calcula o índice do meio

    if (arr[meio] === alvo) {
      return meio; // Se o valor do meio for o alvo, retornamos o índice
    }

    if (arr[meio] < alvo) {
      esquerda = meio + 1; // Se o valor do meio for menor que o alvo, buscamos na parte direita
    } else {
      direita = meio - 1; // Se o valor do meio for maior que o alvo, buscamos na parte esquerda
    }
  }
  return -1; // Se o alvo não for encontrado, retornamos -1
}
// Exemplo de uso
const numeros = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const alvo = 7;
const resultado = buscaBinaria(numeros, alvo);

if (resultado !== -1) {
  console.log(`
    
    Valor encontrado no índice ${resultado}
    
    `);
} else {
  console.log("Valor não encontrado.");
}
