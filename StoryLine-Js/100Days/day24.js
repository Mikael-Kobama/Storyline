function heapify(arr, n, i) {
  let maior = i;
  let esquerda = 2 * i + 1;
  let direita = 2 * i + 2;

  if (esquerda < n && arr[esquerda] > arr[maior]) {
    maior = esquerda;
  }

  if (direita < n && arr[direita] > arr[maior]) {
    maior = direita;
  }

  if (maior !== i) {
    [arr[i], arr[maior]] = [arr[maior], arr[i]];
    heapify(arr, n, maior);
  }
}

function heapSort(arr) {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

const numeros = [12, 11, 13, 5, 6, 7];
console.log(heapSort(numeros));
