// Função filter personalizada
var filter = function (arr, fn) {
  // Inicializamos um array vazio que vai armazenar os elementos filtrados
  let filterArray = [];

  // Usamos um laço para percorrer todos os elementos do array
  for (let i = 0; i < arr.length; i++) {
    // Passamos o valor do elemento e o índice para a função fn
    // fn retorna um valor booleano: true se o elemento deve ser mantido, false se deve ser filtrado
    if (fn(arr[i], i)) {
      // Se fn retornar true, adicionamos o elemento ao filterArray
      filterArray.push(arr[i]);
    }
  }

  // Retornamos o array contendo apenas os elementos filtrados
  return filterArray;
};

// Função de exemplo para filtrar valores maiores que 10
function greaterThan10(value, index) {
  // Essa função verifica se o valor do elemento é maior que 10
  return value > 10;
}

// Teste da função filter com o exemplo de fn
const arr = [5, 15, 8, 25, 3];
const result = filter(arr, greaterThan10); // Esperado: [15, 25]

console.log(result); // Exibe o array filtrado, apenas com os valores maiores que 10
