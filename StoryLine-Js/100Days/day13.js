// Função que implementa o algoritmo Merge Sort
function mergeSort(arr) {
  // Se o array tiver apenas um elemento ou estiver vazio, já está ordenado
  if (arr.length <= 1) {
    return arr;
  }
  // Encontrar o ponto médio do array
  const meio = Math.floor(arr.length / 2);
  // Dividir o array em duas metades
  const esquerda = mergeSort(arr.slice(0, meio)); 
  const direita = mergeSort(arr.slice(meio));

  // Função para mesclar duas listas ordenadas
  return merge(esquerda, direita);
}

// Função para mesclar duas listas ordenadas
function merge(esquerda, direita) {
  let resultado = [];
  let i = 0;
  let j = 0;

  // Enquanto houver elementos em ambas as listas
  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  // Concatenar os elementos restantes das listas
  return resultado.concat(esquerda.slice(i), direita.slice(j));
}

// Exemplo de uso

const numeros = [5, 3, 8, 1, 2, 7];
const resultado = mergeSort(numeros);

console.log("Array ordenado:", resultado);
