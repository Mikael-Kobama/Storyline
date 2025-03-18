function gerarCorAleatoria() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

function gerarMatrizGrandiente(largura, altura) {
  return new Promise((resolve) => {
    let matriz = [];
    let linhaAtual = [];

    for (let i = 0; i < altura; i++) {
      for (let j = 0; j < largura; j++) {
        linhaAtual.push(gerarCorAleatoria());
      }
      matriz.push(linhaAtual);
      linhaAtual = [];
    }

    resolve(matriz);
  });
}

function exibirMatriz(matriz) {
  console.log(matriz.map((linha) => linha.join(" | ")).join("\n"));
}

async function executarProjeto() {
  let altura = 6;
  let largura = 6;

  let matrizGradiente = await gerarMatrizGrandiente(largura, altura);
  exibirMatriz(matrizGradiente);
}

executarProjeto();
