// Função de ordem superior que retorna outra função
function makeMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

// Usando a função para criar multiplicadores específicos
const multiplyBy2 = makeMultiplier(2);
const multiplyBy5 = makeMultiplier(5);

// Aplicando os multiplicadores
console.log(multiplyBy2(10)); // 20
console.log(multiplyBy5(10)); // 50

// Outra maneira de usar funções de ordem superior é com Array.prototype.map
const numbers = [1, 2, 3, 4, 5];

// Usando map para aplicar uma função em cada elemento do array
const multipliedBy3 = numbers.map(makeMultiplier(3));

console.log(multipliedBy3); // [3, 6, 9, 12, 15]

// Filtrando números pares do array usando filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4]

// Combinando map e filter para criar um fluxo de transformação de dados
const transformedNumbers = numbers
  .filter((num) => num % 2 !== 0) // Filtrando números ímpares
  .map(makeMultiplier(10)); // Multiplicando os ímpares por 10

console.log(transformedNumbers); // [10, 30, 50]
