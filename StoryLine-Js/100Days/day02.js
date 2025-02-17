// Função que implementa o comportamento do map
var map = function (arr, fn) {
  let result = []; // Cria um array vazio para armazenar os resultados

  // Loop para percorrer cada elemento do array 'arr'
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i)); // Aplica a função 'fn' e adiciona ao resultado
  }

  return result; // Retorna o array com os valores transformados
};

// Teste da função map

// Função de exemplo: adicionar 1 ao valor de cada elemento
function plusOne(n) {
  return n + 1;
}

// Chamada da função map com um array e a função plusOne
const result = map([1, 2, 3], plusOne);
console.log(result); // Esperado: [2, 3, 4]

// Outra função de exemplo: adicionar o índice ao valor do elemento
function plusIndex(n, i) {
  return n + i;
}

// Chamada da função map com um array e a função plusIndex
const result2 = map([1, 2, 3], plusIndex);
console.log(result2); // Esperado: [1, 3, 5]
