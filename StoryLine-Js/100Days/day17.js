function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Se o array tem 1 ou menos elementos, já está ordenado

  const meio = Math.floor(arr.length / 2); // Encontra o meio do array
  const esquerda = arr.slice(0, meio); // Cria o sub-array da esquerda
  const direita = arr.slice(meio); // Cria o sub-array da direita

  return merge(mergeSort(esquerda), mergeSort(direita)); // Chama recursivamente para ordenar e fundir
}

function merge(esquerda, direita) {
  let resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  if (i < esquerda.length) {
    resultado = resultado.concat(esquerda.slice(i));
  }
  if (j < direita.length) {
    resultado = resultado.concat(direita.slice(j));
  }

  return resultado;
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Array ordenado:", mergeSort(arr));
