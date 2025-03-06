function buscaBinaria(arr, alvo) {
  let esquerda = 0;
  let direita = arr.length - 1;

  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);

    if (arr[meio] === alvo) {
      return meio;
    }
    if (arr[meio] < alvo) {
      esquerda = meio + 1;
    } else {
      direita = meio - 1;
    }
  }

  return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const alvo = 7;
const resultado = buscaBinaria(arr, alvo);

if (resultado !== -1) {
  console.log(`Elemento ${alvo} encontrado no índice ${resultado}`);
} else {
  console.log("Elemento não encontrado");
}
