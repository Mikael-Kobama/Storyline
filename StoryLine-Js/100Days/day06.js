// Função que soma os valores resolvidos de duas promessas
var addTwoPromises = async function (promise1, promise2) {
  // Espera a primeira promessa ser resolvida e armazena seu valor em result1
  const result1 = await promise1;
  // Espera a segunda promessa ser resolvida e armazena seu valor em result2
  const result2 = await promise2;
  // Retorna a soma dos dois resultados
  return result1 + result2;
};

// Criando as promessas para os testes
let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

// Testando a função com promessas que resolvem com os valores 2 e 5
addTwoPromises(promise1, promise2).then((result) => {
  console.log("o resultado é: " + result); // Esperado: 7 (2 + 5)
});

// Criando outro exemplo de promessas para testar somando valores diferentes
let promise3 = new Promise((resolve) => setTimeout(() => resolve(10), 50));
let promise4 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));

// Testando a função com promessas que resolvem com os valores 10 e -12
addTwoPromises(promise3, promise4).then((result) => {
  console.log("o resultado é: " + result); // Esperado: -2 (10 + -12)
});
