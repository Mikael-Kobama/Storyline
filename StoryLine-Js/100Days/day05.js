function memoize(fn) {
  // Cache para armazenar os resultados das chamadas da função
  const cache = {};
  // Contador de chamadas para rastrear quantas vezes a função foi chamada
  let callCount = 0;

  // Retorna uma nova função que será a versão memoizada
  return function(...args) {
      // Cria uma chave única para os argumentos passados usando JSON.stringify()
      // Isso ajuda a evitar que (a, b) e (b, a) sejam tratados como iguais
      const key = JSON.stringify(args);
      // Verifica se o resultado para esses argumentos já está no cache
      if (key in cache) {
          // Se sim, retorna o valor armazenado no cache
          return cache[key];
      }

      // Se não estiver no cache, incrementa o contador de chamadas
      callCount++;
      // Chama a função original com os argumentos passados
      const result = fn(...args);
      // Armazena o resultado no cache usando a chave criada
      cache[key] = result;
      // Retorna o resultado calculado
      return result;
  }
}

// Função que calcula o fatorial de um número
function factorial(n) {
  if (n <= 1) {
      return 1;  // Caso base: fatorial de 0 ou 1 é 1
  }
  return n * factorial(n - 1);  // Chamada recursiva
}

// Função para memoizar a função fatorial
const memoizedFactorial = memoize(factorial);
// Testando a função fatorial memoizada
console.log(memoizedFactorial(5)); // Esperado: 120
console.log(memoizedFactorial(3)); // Esperado: 6
console.log(memoizedFactorial(5)); // Esperado: 120 (chamada do cache, não recalcura)
console.log(memoizedFactorial(4)); // Esperado: 24
console.log(memoizedFactorial(3)); // Esperado: 6 (chamada do cache)
