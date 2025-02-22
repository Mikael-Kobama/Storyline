// Função sleep assíncrona
// A função 'sleep' recebe um número de milissegundos (millis) e retorna uma promessa que resolve após esse tempo.
async function sleep(millis) {
  // Retorna uma nova promessa.
  // A promessa é a base de uma operação assíncrona que pode ser resolvida ou rejeitada.
  return new Promise((resolve) => {
    // O setTimeout é utilizado para aguardar um tempo específico (millis).
    // O primeiro parâmetro do setTimeout é a função a ser executada depois do tempo.
    // O segundo parâmetro é o número de milissegundos (millis) a aguardar.
    setTimeout(() => {
      // Quando o tempo de espera (millis) for completado, chamamos 'resolve()'.
      // Isso indica que a promessa foi resolvida.
      resolve();
    }, millis); // A função será chamada após 'millis' milissegundos
  });
}

// Teste 1: Sleep de 100ms
let t = Date.now(); // Armazenando o tempo atual, para medir quanto tempo a função leva para resolver.
sleep(100).then(() => {
  // Quando a promessa for resolvida (após 100ms), esse bloco de código é executado.
  // A diferença entre o tempo atual e o tempo que foi armazenado é o tempo que passou.
  console.log(Date.now() - t); // Esperado: Aproximadamente 100ms
});

// Teste 2: Sleep de 200ms
let t2 = Date.now(); // Armazenando o tempo antes da chamada da função sleep com 200ms.
sleep(200).then(() => {
  // Quando a promessa for resolvida (após 200ms), esse bloco de código é executado.
  console.log(Date.now() - t2); // Esperado: Aproximadamente 200ms
});
