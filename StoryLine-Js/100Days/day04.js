// Função que garante que a função fn será chamada no máximo uma vez
var once = function (fn) {
  let called = false; // Variável para verificar se a função já foi chamada
  let result; // Variável para armazenar o resultado da primeira execução

  // Retorna uma nova função que pode ser chamada
  return function (...args) {
    // Se a função já foi chamada, retorna undefined nas próximas chamadas
    if (called) {
      return undefined; // As chamadas subsequentes retornam undefined
    }
    // Marca a função como chamada, para que não seja chamada novamente
    called = true;
    // Executa a função fn com os argumentos fornecidos e armazena o resultado
    result = fn(...args); // A função fn é chamada com os parâmetros passados
    // Retorna o resultado da primeira execução
    return result; // O resultado da primeira chamada é retornado
  };
};

const fn = (a, b, c) => a * b * c;
const onceFn = once(fn);

console.log(onceFn(5, 7, 4)); // Esperado: 140
console.log(onceFn(2, 3, 6)); // Esperado: undefined
console.log(onceFn(4, 6, 8)); // Esperado: undefined
